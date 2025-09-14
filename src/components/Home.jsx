/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import SEO from './SEO';
import BookingWidget from './BookingWidget';

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
              Welcome to our Hair Stylist Business
            </h1>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              We Make You Look Your Best
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our team of experienced hair stylists are dedicated to making you
              look and feel your best. We offer a wide range of services to meet
              all of your hair care needs.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </p>
          </div>

          <div className="mt-10">
            <div className="md:grid md:grid-cols-2 md:gap-6">
              <div className="mt-5 md:mt-0 md:col-span-1">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <img
                    src="https://ailenhairstylistweb.s3.amazonaws.com/woman-1869208_1280.jpg"
                    alt=""
                    className="h-48 w-full object-cover"
                  />
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Haircuts for Men and Women
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm text-gray-500">
                      Our experienced stylists will give you the perfect cut to
                      match your style and personality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 md:mt-0 md:col-span-1">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <img
                    src="https://ailenhairstylistweb.s3.amazonaws.com/females-1450050_1280.jpg"
                    alt=""
                    className="h-48 w-full object-cover"
                  />
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Hair Color and Highlights
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm text-gray-500">
                      Let our expert colorists give you the perfect shade to
                      complement your skin tone and enhance your natural beauty.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-6 mt-10">
              <div className="mt-5 md:mt-0 md:col-span-1">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <img
                    src="https://ailenhairstylistweb.s3.amazonaws.com/people-2559662_1280.jpg"
                    alt=""
                    className="h-48 w-full object-cover"
                  />
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Hair Extensions
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm text-gray-500">
                      Add length and volume to your hair with our high-quality
                      hair extensions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 md:mt-0 md:col-span-1">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <img
                    src="https://ailenhairstylistweb.s3.amazonaws.com/haircut-2664088_1280.jpg"
                    alt=""
                    className="h-48 w-full object-cover"
                  />
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Bridal and Special Occasion Styling
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm text-gray-500">
                      Let us create a beautiful and unique hairstyle for your
                      special day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Our Team
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Experienced Stylists
          </p>
        </div>

        <div className="mt-10">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="shadow overflow-hidden sm:rounded-md">
                <img
                  src="https://ailenhairstylistweb.s3.amazonaws.com/model-429733_1280.jpg"
                  alt=""
                  className="h-48 w-full object-cover"
                />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Jane Doe
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    With over 10 years of experience in the industry, Jane
                    specializes in hair color and highlights.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="shadow overflow-hidden sm:rounded-md">
                <img
                  src="https://ailenhairstylistweb.s3.amazonaws.com/curler-2224006_1280.jpg"
                  alt=""
                  className="h-48 w-full object-cover"
                />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    John Smith
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    As a master stylist with over 15 years of experience, John
                    is known for his precision haircuts for men and women.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-6 mt-10">
            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="shadow overflow-hidden sm:rounded-md">
                <img
                  src="https://ailenhairstylistweb.s3.amazonaws.com/hair-3697343_1280.jpg"
                  alt=""
                  className="h-48 w-full object-cover"
                />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Sarah Johnson
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    With a passion for bridal and special occasion styling,
                    Sarah has over 8 years of experience in the industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="shadow overflow-hidden sm:rounded-md">
                <img
                  src="https://ailenhairstylistweb.s3.amazonaws.com/the-girl-is-lying-on-the-floor-1386195_1280.jpg"
                  alt=""
                  className="h-48 w-full object-cover"
                />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Emily Davis
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    As a certified hair extension specialist, Emily has over 5
                    years of experience creating beautiful and natural-looking
                    extensions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Book Your Appointment Today
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Contact us to schedule your appointment and experience the best
              hair care services in town.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              {/* Google Calendar booking - commented for future use
              <a
                href="https://calendar.app.google/5XBVozU5EGnRZpKR8"
                target="_blank"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700" rel="noreferrer"
              >
                Book Now (Google)
              </a>
              */}
              <button
                onClick={() => setIsBookingWidgetOpen(true)}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <BookingWidget 
        isOpen={isBookingWidgetOpen} 
        onClose={() => setIsBookingWidgetOpen(false)} 
      />
    </>
  );
}

export default Home;
