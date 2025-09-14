import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";

// Fetch all appointments
async function fetchAppointments() {
  try {
    const response = await API.graphql({ query: queries.listAppointments });
    return response?.data?.listAppointments?.items || [];
  } catch (error) {
    console.error("Error fetching appointments:", error);
    throw error;
  }
}

// Create new appointment
async function createAppointment(appointmentData) {
  try {
    const response = await API.graphql({
      query: mutations.createAppointment,
      variables: { input: appointmentData }
    });
    return response?.data?.createAppointment;
  } catch (error) {
    console.error("Error creating appointment:", error);
    throw error;
  }
}

// Check if a time slot is available
async function checkTimeSlotAvailability(date, time, duration = 60) {
  try {
    const appointments = await fetchAppointments();
    
    // Filter appointments for the same date
    const sameDate = appointments.filter(apt => 
      apt.appointmentDate === date && apt.status !== 'cancelled'
    );
    
    // Check for time conflicts
    const requestedStart = new Date(`${date}T${time}:00`);
    const requestedEnd = new Date(requestedStart.getTime() + duration * 60000);
    
    const hasConflict = sameDate.some(apt => {
      const existingStart = new Date(`${apt.appointmentDate}T${apt.appointmentTime}:00`);
      const existingEnd = new Date(existingStart.getTime() + apt.duration * 60000);
      
      return (
        (requestedStart >= existingStart && requestedStart < existingEnd) ||
        (requestedEnd > existingStart && requestedEnd <= existingEnd) ||
        (requestedStart <= existingStart && requestedEnd >= existingEnd)
      );
    });
    
    return !hasConflict;
  } catch (error) {
    console.error("Error checking availability:", error);
    return false;
  }
}

// Custom hooks
export function useFetchAppointments() {
  return useQuery({
    queryKey: ["appointments"],
    queryFn: fetchAppointments,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useCreateAppointment() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createAppointment,
    onSuccess: () => {
      // Invalidate and refetch appointments
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    },
  });
}

export function useCheckAvailability() {
  return useMutation({
    mutationFn: ({ date, time, duration }) => 
      checkTimeSlotAvailability(date, time, duration),
  });
}

// Get available time slots for a specific date
export async function getAvailableTimeSlots(date, serviceDuration = 60) {
  const allTimeSlots = [
    '09:00', '10:00', '11:00', '12:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];
  
  const availableSlots = [];
  
  for (const time of allTimeSlots) {
    const isAvailable = await checkTimeSlotAvailability(date, time, serviceDuration);
    if (isAvailable) {
      availableSlots.push(time);
    }
  }
  
  return availableSlots;
}