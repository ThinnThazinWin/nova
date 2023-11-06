import React from "react";
import { MdClose } from "react-icons/md";

// JUST TESTING BOTTOM SHEET

const Bottomsheet = ({ isOpen, setIsOpen, formData, selectedServiceData }) => {
  console.log(isOpen);
  const modalClasses = isOpen ? "block" : "hidden";
  return (
    <>
{/*     
    // <div className={`bottomSheet ${isOpen ? "open" : ""} `}>
    //   <div className="fixed inset-0 bg-black opacity-50 modal-overlay "></div>
    //   <div className="container">
    //   <div className="flex justify-between z-100 ">
       
    //     <p>Confirmation</p>
    //     <div
    //       onClick={() => setIsOpen(false)}
    //       className="cursor-pointer border border-red-600 px-3 py-1 "
    //     >
    //       <MdClose />
    //     </div>
    //   </div>
    //   </div>
    // </div> */}
      <div
      className={`fixed inset-0 h-screen first-line:flex items-center  justify-center ${modalClasses} relative`}
    >
      <div className="fixed inset-0 bg-black opacity-50 modal-overlay"></div>
      <div className="container bg-white">
   <div className="absolute bottom-0
   ">hello</div>
      </div>
      </div>
    </>
  );
};

export default Bottomsheet;
