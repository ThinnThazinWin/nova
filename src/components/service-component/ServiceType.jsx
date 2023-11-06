import React from 'react'

const ServiceType = ({type, activeService, editMode, handleServiceClick}) => {
    

  return (
    <>
        {type.map((service, index) => (
      <div
        key={index}
        onClick={() => handleServiceClick(service)}
        className={`cursor-pointer py-3 px-16 text-center border-2 rounded-md hover:border-[#000]  active:scale-[.98] active:duration-75 transition-all hover:scale-[1.04] ease-in-out transform ${
          activeService === service
            ? "w-full md:w-1/2 bg-[#000] text-[#E1FF3C] "
            : editMode
            ? "w-full bg-[#fff] text-[#6d7153]  active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform"
            : "w-full md:w-1/2 bg-[#fff] text-[#6d7153] "
        } relative`}
      >
        {service}
        {activeService === service && !editMode && (
          <div className="absolute -top-2 -right-2 border rounded-full w-6 h-6 bg-[#E1FF3C] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-slate-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )}
      </div>))}
      </>
  )
}

export default ServiceType