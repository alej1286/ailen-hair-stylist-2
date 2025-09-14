import React from 'react';
import { FaStar, FaUsers, FaCertificate, FaShieldAlt } from 'react-icons/fa';

const TrustSignals = () => {
  const trustMetrics = [
    {
      icon: <FaStar className="w-8 h-8 text-yellow-500" />,
      value: "4.9/5",
      label: "Average Rating",
      description: "Based on 200+ reviews"
    },
    {
      icon: <FaUsers className="w-8 h-8 text-blue-500" />,
      value: "500+",
      label: "Happy Clients",
      description: "Served this year"
    },
    {
      icon: <FaCertificate className="w-8 h-8 text-green-500" />,
      value: "15+",
      label: "Years Experience",
      description: "In hair styling"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-purple-500" />,
      value: "100%",
      label: "Satisfaction",
      description: "Guarantee"
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Trusted by hundreds of satisfied clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-gray-500">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;