import React from "react";
import {
  MdFlight,
  MdDirectionsBus,
  MdLocalTaxi,
  MdTrain,
  MdHotel,
} from "react-icons/md";
const sideBarItems = [
  {
    name: "Flight",
    icon: <MdFlight />,
    link: "/flight",
  },
  {
    name: "Bus",
    icon: <MdDirectionsBus />,
    link: "/bus",
  },
  {
    name: "Taxi",
    icon: <MdLocalTaxi />,
    link: "/taxi",
  },
  {
    name: "Train",
    icon: <MdTrain />,
    link: "/train",
  },
  {
    name: "Hotel",
    icon: <MdHotel />,
    link: "/hotel",
  },
];

const Sidebar = () => {
  return (
    <div>
      {/* Fixed navigation section */}
      <nav className="z-20 flex items-start justify-around gap-1 border-t border-gray-200 bg-transparent p-1 shadow-lg backdrop-blur-lg fixed top-1/2 transform -translate-y-1/2 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
        {sideBarItems.map((item) => (
          <div>
            <a
              key={item.name} // Use a unique key, in this case, we use item.name assuming it's unique
              href={item.link} // Link to navigate to
              className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-400 transition duration-300 hover:bg-gray-400 hover:text-white dark:hover:bg-gray-400 dark:hover:text-white rounded-lg px-2 py-4 w-full"
              style={{ textDecoration: "none" }}
            >
              {item.icon} {/* Render the icon from data */}
              <small className="text-xs font-medium">{item.name}</small>{" "}
              {/* Render the name from data */}
            </a>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
