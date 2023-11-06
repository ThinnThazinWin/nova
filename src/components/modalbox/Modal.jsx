import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {MdClose} from 'react-icons/md'

const Modal = ({ isOpen, setIsOpen, formData, selectedServiceData }) => {
  let serviceType = selectedServiceData[0].activeServiceName;
  let {serviceName, mb, price} = selectedServiceData[0].activePlan;
 

const {fullName,applicant, mobile,email, address, city, residential, companyName }= formData;
  const onClose = () => {
    setIsOpen(false);
  };
  const modalClasses = isOpen ? "block" : "hidden";

  useEffect(() => {
    if (isOpen) {
     
      const overlay = document.querySelector(".modal-overlay");
      overlay.addEventListener("click", onClose);

      
      return () => {
        overlay.removeEventListener("click", onClose);
      };
    }
  }, [isOpen]);

  return (
    
    <div
      className={`fixed inset-0 h-screen w-screen items-center  justify-center ${modalClasses}`}
    >
      <div className="fixed inset-0 bg-black opacity-50 modal-overlay"></div>
      <div className=" top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-center bg-white max-w-[500px] max-h-[700px] p-8  z-10   relative">
      <div className="w-full ">

          <div className='flex items-center justify-between'>

            <h1 className="text-xl font-bold">Confirmation</h1>
            <MdClose className="border border-red-600 cursor-pointer" onClick={onClose}/>
            </div>
            <p className="mt-2">
              Please make sure that all information entered below is correct
            </p>
          <div className="h-[480px] overflow-y-scroll scroll-smooth mt-8">
          <div class="w-full flex ">
            <div class="w-3/5">
              <p className="text-sm font-small text-[#6c6262]">Servie Type</p>
              <p className="text-md font-bold text-[#000]">{serviceType}</p>
            </div>
            <div class="w-2/5">
              <p className="text-sm font-small text-[#6c6262]">Servie Plan</p>
              <p className="text-md font-bold text-[#000]">{serviceName}{mb}</p>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-sm font-small text-[#6c6262]">Price</p>
            <p className="text-md font-bold text-[#000]">{price}</p>
          </div>
          <div class="w-full flex mt-6">
            <div class="w-3/5">
              <p className="text-sm font-small text-[#6c6262]">Full Name Of Applicant</p>
              <p className="text-md font-bold text-[#000]">{fullName}</p>
            </div>
            <div class="w-2/5">
              <p className="text-sm font-small text-[#6c6262]">Mobile</p>
              <p className="text-md font-bold text-[#000]">{mobile}</p>
            </div>
          </div>
          <div class="w-full flex ">
          <div className="w-3/5 mt-6">
            <p className="text-sm font-small text-[#6c6262]">Applicant Type</p>
            <p className="text-md font-bold text-[#000]">{applicant}</p>
          </div>
          {companyName && (
            <div className="w-2/5 mt-6">
            <p className="text-sm font-small text-[#6c6262]">Company Name</p>
            <p className="text-md font-bold text-[#000] w-full">{companyName}</p>
          </div>
          )}
          
          </div>
          <div className="mt-6">
            <p className="text-sm font-small text-[#6c6262]">Email</p>
            <p className="text-md font-bold text-[#000]">{email}</p>
          </div>
          <div class="w-full flex mt-6">
            <div class="w-3/5">
              <p className="text-sm font-small text-[#6c6262]">City</p>
              <p className="text-md font-bold text-[#000]">{city}</p>
            </div>
            <div class="w-2/5">
              <p className="text-sm font-small text-[#6c6262]">Township</p>
              <p className="text-md font-bold text-[#000]">Yangon</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm font-small text-[#6c6262]">Residential Type</p>
            <p className="text-md font-bold text-[#000]">{residential}</p>
          </div>
          <div class="w-full flex mt-6">
            <div class="w-3/5">
              <p className="text-sm font-small text-[#6c6262]">Address</p>
              <p className="text-md font-bold text-[#000]">{address}</p>
            </div>
            <div class="w-2/5">
              <p className="text-sm font-small text-[#6c6262]">Lattitude & Logntitude</p>
              <p className="text-md font-bold text-[#000]">15.66434554666,</p>
              <p className="text-md font-bold text-[#000]">15.66434554666,</p>
            </div>
          </div>
          </div>
        
        <Link to="/success" class='flex items-center justify-center mt-4 mb-16'>
          <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 px-14 bg-[#000] rounded-sm text-[#E1FF3C] font-semibold text-md" onClick={onClose}>
            Confirm
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};
export default Modal;
