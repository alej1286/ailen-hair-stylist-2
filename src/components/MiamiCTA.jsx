import React, { useState } from 'react';

import BookingWidget from './BookingWidget';

const MiamiCTA = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Book Your Appointment Today
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Transform your look with Miami's premier hair stylist
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              📅 Book Online Now
            </button>
            <a
              href="tel:+17867949162"
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              📞 Call (786) 794-9162
            </a>
          </div>
          
          <div className="mt-6 text-pink-100 text-sm">
            ⭐ 5.0 Stars • Same-Day Appointments • Serving All Miami-Dade
          </div>
        </div>
      </div>
      
      <BookingWidget 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
};

export default MiamiCTA;