import React from "react";

const Content = () => {
  return (
    <div className="w-6/6">
      <div className="min-h-screen bg-gray-50 py-12">
        <div className=" mx-auto px-6 lg:px-8">
          {/* Header Section */}
          <div className="sm:flex items-center">
            <div className="sm:w-1/2 p-10">
              <div className="image object-center text-center">
                <img
                  src="https://i.imgur.com/WbQnbas.png"
                  alt="Company"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
            <div className="sm:w-1/2 p-5">
              <div className="text">
                <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
                  About us
                </span>
                <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                  About{" "}
                  <span className="text-indigo-600">BG Travel & Tourism</span>
                </h2>
                <p className="text-gray-700">
                  BG Travel & Tourism is your trusted partner for all your
                  travel needs. We specialize in offering comprehensive travel
                  packages to some of the most beautiful destinations around the
                  world. Whether you're looking for adventure, relaxation, or
                  cultural experiences, we've got you covered.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-12 mt-10">
            <div className="space-y-6 text-gray-800">
              <p>
                Email:{" "}
                <a
                  href="mailto:info@bgimmigration.net"
                  className="text-blue-600"
                >
                  info@bgimmigration.net
                </a>
              </p>
              <p>Hours: Monday to Saturday 9:30 AM to 6:30 PM</p>
              <p>
                Corporate Office: SCO 264, Urban Estate Phase 1, Patiala, Punjab
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-12 mt-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Locations Section */}
          <h2 className="text-3xl font-semibold mt-12 mb-6 text-gray-900 text-center">
            Our Locations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Canada
              </h3>
              <p className="text-gray-800">
                SCO 264, Urban Estate Phase-1, Patiala
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Australia
              </h3>
              <p className="text-gray-800">DSS 44, Sector 1, Ambala</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                New Zealand
              </h3>
              <p className="text-gray-800">SCO 84-85 Sector 13, Karnal</p>
            </div>
          </div>

          {/* Contact Us Section */}
          <h2 className="text-3xl font-semibold mt-12 mb-6 text-gray-900 text-center">
            Contact Us
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-6 text-gray-800">
            <p>Corporate Office: SCO 264, Urban Estate Phase-1, Patiala</p>
            <p>Ambala Office: DSS 44, Sector 1, Ambala</p>
            <p>Karnal Office: SCO 84-85 Sector 13, Karnal</p>
            <p>
              Email:{" "}
              <a href="mailto:info@bgimmigration.com" className="text-blue-600">
                info@bgimmigration.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+918405885058" className="text-blue-600">
                +91 840 588 5058
              </a>
              ,{" "}
              <a href="tel:+917087068485" className="text-blue-600">
                +91 708 706 8485
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
