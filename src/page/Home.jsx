// #region load dependencies
import React, { useState } from "react";
// #endregion
// #region load component
import Form from "./form/Form";
import Service from "./service/Service";
import Header from "../components/header/Header";
// #endregion

const Home = () => {
  // #State to store selected service data
  const [selectedServiceData, setSelectedServiceData] = useState({
    
  });

  // #Function to update the selected service data
  const handleDataSelect = (data) => {
    setSelectedServiceData(data);

   
  };
// console.log(selectedServiceData)
  return (
    <>
      <Header
        title="FTTH APPLICATION FORM"
        desc=" Follow the instructins to complete the form & Review your entries
            before procedding to the next step"
      />

      <div className="w-full mx-auto max-w-[850px] lg:max-w-[1200px] md:px-10  rounded-3xl bg-white ">
        <Service onDataSelect={handleDataSelect} />
        <Form selectedServiceData={selectedServiceData} />
      </div>
    </>
  );
};

export default Home;
