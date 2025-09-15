import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { format, addDays, isWeekend } from 'date-fns';
import { useFetchServicesApi } from '../api/ServicesApi';
import { useCreateAppointment, getAvailableTimeSlots } from '../api/AppointmentsApi';
import "react-datepicker/dist/react-datepicker.css";

const BookingWidget = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [services, setServices] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);

  // Fetch services from API
  const { data: servicesData, isLoading: servicesLoading, error: servicesError } = useFetchServicesApi();
  const createAppointmentMutation = useCreateAppointment();

  useEffect(() => {
    if (servicesData) {
      // Transform services data to include duration (default 60 minutes)
      const transformedServices = servicesData.map(service => ({
        id: service.id,
        name: service.type,
        duration: 60, // Default duration, you can modify this based on service type
        price: parseFloat(service.price) || 0
      }));
      setServices(transformedServices);
    }
  }, [servicesData]);

  // Load available times when date changes
  useEffect(() => {
    const currentService = services.find(s => s.id === selectedService);
    if (selectedDate && currentService) {
      setIsCheckingAvailability(true);
      const dateString = format(selectedDate, 'yyyy-MM-dd');
      
      getAvailableTimeSlots(dateString, currentService.duration)
        .then(slots => {
          setAvailableTimes(slots);
          // Clear selected time if it's no longer available
          if (selectedTime && !slots.includes(selectedTime)) {
            setSelectedTime('');
          }
        })
        .catch(error => {
          console.error('Error loading available times:', error);
          setAvailableTimes([]);
        })
        .finally(() => {
          setIsCheckingAvailability(false);
        });
    } else {
      setAvailableTimes([]);
    }
  }, [selectedDate, selectedService, services, selectedTime]);

  // Find selected service data
  const selectedServiceData = services.find(s => s.id === selectedService);

  const isDateAvailable = (date) => {
    const today = new Date();
    return date >= today && !isWeekend(date);
  };

  const handleServiceChange = (serviceId) => {
    setSelectedService(serviceId);
    setSelectedDate(null);
    setSelectedTime('');
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleCustomerInfoChange = (field, value) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const appointmentData = {
        serviceId: selectedService,
        serviceName: selectedServiceData.name,
        customerName: customerInfo.name,
        customerEmail: customerInfo.email,
        customerPhone: customerInfo.phone,
        appointmentDate: format(selectedDate, 'yyyy-MM-dd'),
        appointmentTime: selectedTime,
        duration: selectedServiceData.duration,
        price: selectedServiceData.price,
        status: 'pending',
        notes: ''
      };

      await createAppointmentMutation.mutateAsync(appointmentData);
      
      setShowConfirmation(true);
      
      setTimeout(() => {
        setShowConfirmation(false);
        setSelectedService('');
        setSelectedDate(null);
        setSelectedTime('');
        setCustomerInfo({ name: '', email: '', phone: '' });
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error creating appointment:', error);
      alert('Error creating appointment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  // Show loading state while fetching services
  if (servicesLoading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            <span className="ml-2">Loading services...</span>
          </div>
        </div>
      </div>
    );
  }

  // Show error state if services failed to load
  if (servicesError) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center">
            <div className="text-red-600 mb-2">Error loading services</div>
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
  const isFormValid = selectedService && selectedDate && selectedTime && 
                     customerInfo.name && customerInfo.email && customerInfo.phone;

  if (showConfirmation) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Booking Confirmed!</h3>
            <p className="text-sm text-gray-500 mb-4">
              Your appointment has been scheduled for {selectedDate && format(selectedDate, 'MM/dd/yyyy')} at {selectedTime}
            </p>
            <p className="text-xs text-gray-400">
              You will receive a confirmation email shortly.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto m-4 max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Book Your Appointment
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select a Service
            </label>
            <select
              value={selectedService}
              onChange={(e) => handleServiceChange(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Choose a service...</option>
              {services.map(service => (
                <option key={service.id} value={service.id}>
                  {service.name} - ${service.price} ({service.duration} min)
                </option>
              ))}
            </select>
          </div>

          {selectedService && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select a Date
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                filterDate={isDateAvailable}
                minDate={new Date()}
                maxDate={addDays(new Date(), 30)}
                placeholderText="Select a date"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                dateFormat="MM/dd/yyyy"
                required
              />
            </div>
          )}

          {selectedDate && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select a Time
              </label>
              {isCheckingAvailability ? (
                <div className="flex items-center justify-center p-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600"></div>
                  <span className="ml-2 text-sm text-gray-600">Checking availability...</span>
                </div>
              ) : availableTimes.length > 0 ? (
                <div className="grid grid-cols-3 gap-2">
                  {availableTimes.map(time => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => handleTimeChange(time)}
                      className={`p-2 text-sm rounded-md border ${
                        selectedTime === time
                          ? 'bg-indigo-600 text-white border-indigo-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center p-4 bg-yellow-50 rounded-md">
                  <p className="text-sm text-yellow-700">
                    No time slots available for this date.
                    Please select another date.
                  </p>
                </div>
              )}
            </div>
          )}

          {selectedTime && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-700">Contact Information</h4>
              
              <input
                type="text"
                placeholder="Full name"
                value={customerInfo.name}
                onChange={(e) => handleCustomerInfoChange('name', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              
              <input
                type="email"
                placeholder="Email"
                value={customerInfo.email}
                onChange={(e) => handleCustomerInfoChange('email', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              
              <input
                type="tel"
                placeholder="Phone"
                value={customerInfo.phone}
                onChange={(e) => handleCustomerInfoChange('phone', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          )}

          {isFormValid && (
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Booking Summary</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Service:</strong> {selectedServiceData.name}</p>
                <p><strong>Date:</strong> {selectedDate && format(selectedDate, 'MM/dd/yyyy')}</p>
                <p><strong>Time:</strong> {selectedTime}</p>
                <p><strong>Duration:</strong> {selectedServiceData.duration} minutes</p>
                <p><strong>Price:</strong> ${selectedServiceData.price}</p>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={!isFormValid || isLoading}
            className={`w-full py-3 px-4 rounded-md text-white font-medium ${
              isFormValid && !isLoading
                ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {isLoading ? 'Processing...' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingWidget;