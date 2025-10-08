/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import SEO from './SEO';
import BookingWidget from './BookingWidget';
import TrustSignals from './TrustSignals';
import MiamiTestimonials from './MiamiTestimonials';
import MiamiServiceAreas from './MiamiServiceAreas';
import MiamiCTA from './MiamiCTA';

function Home() {
  const [isBookingWidgetOpen, setIsBookingWidgetOpen] = useState(false);

  return (
    <>
      <SEO page="home" />
      <div className="bg-gray-100 mt-24">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h1 className="text-base text-indigo-600 font-semibold tracking-wide uppercase mb-5">
              Ailen Hair Stylist - Miami's Premier
            </h1>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Transform Your Look in the Heart of Miami
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Serving Brickell, South Beach, and Coral Gables with expert hair styling, 
              color transformations, and bridal services. Experience Miami's finest 
              hair artistry with personalized attention.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Miami Hair Services
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-600 lg:mx-auto">
              Professional hair services by Ailen Hair Stylist, tailored for Miami's vibrant lifestyle
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="shadow overflow-hidden sm:rounded-md">
                <img
                  src="https://ailenhairstylistweb.s3.amazonaws.com/woman-1869208_1280.jpg"
                  alt=""
                  className="h-48 w-full object-cover"
                />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Miami Precision Cuts
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Trendy cuts perfect for Miami's beach lifestyle and professional scene.
                    From classic to avant-garde styles.
                  </p>
                </div>
              </div>

              <div className="shadow overflow-hidden sm:rounded-md">
                <img
                  src="https://ailenhairstylistweb.s3.amazonaws.com/females-1450050_1280.jpg"
                  alt=""
                  className="h-48 w-full object-cover"
                />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Miami Beach Color & Highlights
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Sun-kissed highlights and vibrant colors that shine under Miami's 
                    tropical sun. Expert color correction and balayage techniques.
                  </p>
                </div>
              </div>

              <div className="shadow overflow-hidden sm:rounded-md">
                <img
                  src="https://ailenhairstylistweb.s3.amazonaws.com/people-2559662_1280.jpg"
                  alt=""
                  className="h-48 w-full object-cover"
                />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Luxury Hair Extensions
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Premium extensions perfect for Miami's glamorous nightlife and 
                    special events. Natural-looking length and volume.
                  </p>
                </div>
              </div>

              <div className="shadow overflow-hidden sm:rounded-md">
                <img
                  src="https://ailenhairstylistweb.s3.amazonaws.com/haircut-2664088_1280.jpg"
                  alt=""
                  className="h-48 w-full object-cover"
                />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Miami Bridal & Event Styling
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Stunning bridal styles for Miami Beach weddings and special events.
                    On-location services available throughout Miami-Dade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      
      {/* Miami Service Areas */}
      <MiamiServiceAreas />
      
      {/* Miami Testimonials */}
      <MiamiTestimonials />
      
      {/* Miami CTA */}
      <MiamiCTA />
      
      {/* Trust Signals Section */}
      <TrustSignals />
      </div>
      
      <BookingWidget 
        isOpen={isBookingWidgetOpen} 
        onClose={() => setIsBookingWidgetOpen(false)} 
      />
    </>
  );
}

export default Home;
