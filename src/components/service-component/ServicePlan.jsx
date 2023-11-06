import React from 'react'

const ServicePlan = ({plan,activePlan,editMode,handlePlanClick}) => {
  return (
    <>
  <>
        <p className="font-bold mt-4 mb-4">Service Plan</p>
        <div className="section">
          <div className="container">
            <div className="cards">
              {plan.map((item, i) => (
                <div
                  className={`card ${
                    activePlan === item ? "selected" : ""
                  } hover:border-[#000]  active:scale-[.98] active:duration-75 transition-all hover:scale-[1.04] ease-in-out transform`}
                  key={i}
                  onClick={() => handlePlanClick(item)}
                >
                  <h1 className="text-[18px] lg:text-[20px] font-semibold mb-3">
                    {item.name}
                  </h1>
                  <p className="text-[16px]">{item.mb}</p>
                  <p>{item.price}</p>
                  {activePlan === item && !editMode && (
                    <>
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
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default ServicePlan