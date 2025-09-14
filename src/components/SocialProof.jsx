import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      rating: 5,
      text: "Amazing service! The team transformed my hair completely. I've never felt more confident.",
      service: "Hair Color & Cut",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Jennifer Smith",
      rating: 5,
      text: "Professional, friendly, and incredibly talented. My wedding hair was absolutely perfect!",
      service: "Bridal Styling",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Johnson",
      rating: 5,
      text: "The hair extensions look so natural! Everyone asks where I got my hair done.",
      service: "Hair Extensions",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Real reviews from real clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 relative">
              <div className="absolute top-4 left-4">
                <FaQuoteLeft className="w-6 h-6 text-indigo-200" />
              </div>
              
              <div className="pt-8">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-8">
            Trusted & Certified
          </h3>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-4 mb-2">
                <span className="text-2xl font-bold text-gray-700">Licensed</span>
              </div>
              <p className="text-sm text-gray-600">Professional Salon</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-4 mb-2">
                <span className="text-2xl font-bold text-gray-700">Insured</span>
              </div>
              <p className="text-sm text-gray-600">Fully Protected</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-4 mb-2">
                <span className="text-2xl font-bold text-gray-700">Certified</span>
              </div>
              <p className="text-sm text-gray-600">Expert Stylists</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;