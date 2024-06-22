import React from "react";
import { offersData } from "../../../assets/data";

const Offers = () => {
  return (
    <div className="w-6/6 mx-auto mt-8 mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {offersData.map((offer) => (
        <div
          key={offer.id}
          className={`relative flex bg-${offer.theme}-200 rounded-lg p-4 overflow-hidden shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-lg`}
        >
          {/* Left Side Image */}
          <div className="flex-shrink-0 w-2/3">
            <img
              src={offer.image}
              alt={offer.title}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Right Side Content */}
          <div className="flex flex-col justify-center pl-4">
            <h3 className="text-lg font-semibold">{offer.title}</h3>
            <p className="mt-2 text-gray-600">Price: ₹{offer.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offers;
