import React from 'react';


const MiamiServiceAreas = () => {
  const serviceAreas = [
    {
      name: "Brickell",
      description: "Serving Miami's financial district with professional styling for business and leisure",
      highlights: ["Corporate styling", "After-work appointments", "Executive cuts"],
      icon: "🏢"
    },
    {
      name: "South Beach",
      description: "Glamorous styles for Miami Beach's vibrant nightlife and beach culture",
      highlights: ["Beach-ready styles", "Event styling", "Color corrections"],
      icon: "🏖️"
    },
    {
      name: "Coral Gables",
      description: "Elegant styling for Miami's most sophisticated neighborhood",
      highlights: ["Bridal services", "Classic cuts", "Premium treatments"],
      icon: "🌺"
    },
    {
      name: "Downtown Miami",
      description: "Modern styles for the heart of the Magic City",
      highlights: ["Trendy cuts", "Color transformations", "Quick touch-ups"],
      icon: "🌆"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Serving All of Miami
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Professional hair services across Miami-Dade County
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceAreas.map((area, index) => (
            <div key={index} className="text-center group hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 p-6 rounded-xl transition-all duration-300">
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{area.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">{area.description}</p>
              
              <ul className="space-y-1 text-sm text-gray-500">
                {area.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        

      </div>
    </div>
  );
};

export default MiamiServiceAreas;