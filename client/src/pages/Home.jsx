import React from "react";
import Crousal from "../component/MainContent/Home/Crousal";
import Offers from "../component/MainContent/Home/Offers";

const Home = () => {
  return (
    <div className="w-6/6 mx-auto mr-4">
      <Crousal />
      <Offers />
    </div>
  );
};

export default Home;
