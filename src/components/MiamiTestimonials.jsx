import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const MiamiTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sofia Rodriguez",
      location: "Brickell",
      rating: 5,
      text: "Ailen Hair Stylist transformed my hair for my Miami Beach wedding! The color was perfect for the tropical setting. Highly recommend!",
      service: "Bridal Styling & Color"
    },
    {
      id: 2,
      name: "Maria Gonzalez",
      location: "Coral Gables",
      rating: 5,
      text: "Ailen Hair Stylist is the best in Miami! She understands the humidity and creates styles that last all day in this climate.",
      service: "Cut & Style"
    },
    {
      id: 3,
      name: "Isabella Martinez",
      location: "South Beach",
      rating: 5,
      text: "Amazing highlights that look natural in the Miami sun. Ailen Hair Stylist is an artist! My hair has never looked better.",
      service: "Highlights & Balayage"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Miami Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Real reviews from satisfied clients across Miami-Dade
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}, Miami</div>
                <div className="text-sm text-indigo-600 font-medium">{testimonial.service}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-6 w-6 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900">5.0</span>
            <span className="text-gray-600">• 50+ Miami Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiamiTestimonials;