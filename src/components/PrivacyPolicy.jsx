import React from "react";
import { Disclosure } from "@headlessui/react";
//import { ChevronUpIcon } from '@heroicons/react/solid';
import { Bars3Icon } from "@heroicons/react/24/outline";

function PrivacyPolicy() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-500">Last updated: July 20, 2023</p>
        </div>
        <div className="mt-6 pt-10 divide-y-2 divide-gray-200">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-gray-900 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50">
                  <span>Introduction</span>
                  <Bars3Icon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500 text-justify">
                  Welcome to "Ailen Hair Stylist" web site. We are committed to
                  respecting your privacy and protecting your personal
                  information. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you use our
                  services through our website or any related applications,
                  products, or services (collectively referred to as the
                  "Service").
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-gray-900 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50">
                  <span>Information We Collect</span>
                  <Bars3Icon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500 text-justify">
                  <p>
                    We may collect information that you provide directly to us
                    when you use our Service. This may include:
                  </p>
                  <ul>
                    <li>
                      Personal information: Name, email address, contact
                      details, etc.
                    </li>
                    <li>
                      Log data: Information about your device and usage of the
                      Service (e.g., IP address, browser type, access times, and
                      pages visited).
                    </li>
                    <li>
                      Cookies and similar technologies: We may use cookies,
                      beacons, and other tracking technologies to collect
                      information about you and your use of the Service.
                    </li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-gray-900 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50">
                  <span>Use of Information</span>
                  <Bars3Icon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500 text-justify">
                  <p>We may use the information collected from you to:</p>
                  <ul>
                    <li>Provide, maintain, and improve our Service.</li>
                    <li>Respond to your comments, questions, and requests.</li>
                    <li>Send you marketing and promotional communications.</li>
                    <li>Analyze and monitor usage patterns and trends.</li>
                    <li>Comply with legal obligations.</li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-gray-900 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50">
                  <span>Disclosure of Information</span>
                  <Bars3Icon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500 text-justify">
                  <p>We may disclose your information:</p>
                  <ul>
                    <li>
                      To our service providers who assist us in providing the
                      Service.
                    </li>
                    <li>
                      To comply with legal obligations, respond to governmental
                      requests, and protect our rights or the rights of others.
                    </li>
                    <li>
                      In connection with a merger, acquisition, or sale of all
                      or a portion of our assets.
                    </li>
                    <li>With your consent or at your direction.</li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-gray-900 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50">
                  <span>Security</span>
                  <Bars3Icon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500 text-justify">
                  <p>
                    We take reasonable measures to protect your information from
                    unauthorized access, alteration, or destruction. However, no
                    data transmission over the internet or electronic storage
                    method is completely secure, and we cannot guarantee its
                    absolute security.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-gray-900 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50">
                  <span>Your Choices</span>
                  <Bars3Icon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500 text-justify">
                  <p>
                    You may have the right to access, correct, or delete your
                    personal information. Please contact us using the
                    information below to exercise these rights.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-gray-900 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50">
                  <span>Children's Privacy</span>
                  <Bars3Icon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500 text-justify">
                  <p>
                    Our Service is not intended for children under the age of
                    13. We do not knowingly collect or solicit personal
                    information from anyone under 13 years old. If you are a
                    parent or guardian and believe that your child has provided
                    us with personal information, please contact us using the
                    information below, and we will promptly remove such
                    information from our records.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-gray-900 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50">
                  <span>Contact Us</span>
                  <Bars3Icon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500 text-justify">
                  <p>
                    If you have any questions or concerns about our Privacy
                    Policy, please contact us using the contact section.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
