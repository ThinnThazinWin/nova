// #region load dependencies
import React, { useState, useEffect } from "react";
// #endregion
// #region load plan_example_data
import { plan } from "../../data/data";
// #endregion
// #region load component
import ServiceType from "../../components/service-component/ServiceType";
import ServicePlan from "../../components/service-component/ServicePlan";
// #endregion

const Service = ({ onDataSelect }) => {
  const [type, setType] = useState(["NovaHome", "NovaBusiness"]);
  const [service, setService] = useState(true);
  const [activeService, setActiveService] = useState(null);
  const [activeServiceName, setActiveServiceName] = useState(null);
  const [activePlan, setActivePlan] = useState(null);
  const [activePlanName, setActivePlanName] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [planConfirm, setPlanConfirm] = useState(false);
  const [planAction, setPlanAction] = useState(true);

  const handleServiceClick = (selectedService) => {
    setActiveService(selectedService);
    setActiveServiceName(selectedService);
    setEditMode(false);
  };

  const handlePlanClick = (plan) => {
    setActivePlan(plan);
    setActivePlanName(plan);
    setEditMode(false);
  };

  useEffect(() => {
    // console.log(activePlanName);
  }, [activePlanName]);

  const handleEditClick = () => {
    setEditMode(true);
    setPlanConfirm(false);
    setActivePlan(null);
    setService(true);
  };

  const handleConfirmClick = () => {
    setConfirm(true);
    setActiveService(null);
    setService(false);
  };

  const handleCancel = () => {
    setActiveService(null);
  };
  const handlePlanCancel = () => {
    if (activePlan !== null) setActivePlan(null);
    else {
      setConfirm(false);
      setService(true);
    }
  };

  const handlePlanConfirmClick = () => {
    setConfirm(false);
    setPlanConfirm(true);
    onDataSelect([{ activeServiceName, activePlan }]);
  };

  return (
    <>
      <div className="w-11/12 max-w-[900px] mx-auto px-10 py-2 rounded-3xl bg-[#fff] mt-8">

        <h1 className="text-lg font-bold">Your Service</h1>

        {/* ServiceTypeDiv */}
        <p className="text-md mt-8 mb-4 font-bold w-1/3">Service Type</p>
        {service && (
          <div className="mt-8 flex justify-between gap-6 w-full flex-wrap md:flex-nowrap">
            <ServiceType
              type={type}
              activeService={activeService}
              editMode={editMode}
              handleServiceClick={handleServiceClick}
            />
          </div>
        )}
        {activeService && !editMode && (
          <>
            <div className="mt-8 flex justify-center md:justify-end gap-6 button-group">
              <button
                className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform px-6 h-10 rounded-md  text-[#000] font-semibold bg-[#E1FF3C] border"
                onClick={handleConfirmClick}
              >
                Confirm
              </button>
              <button
                className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform h-10 px-6 rounded-md text-[#000] border"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </>
        )}
        {/* EndDiv */}

        {/* ServicePlanDiv */}
        {confirm && !editMode && (
          <>
            <div
              className={` py-2 md:py-3 lg:py-4 px-16 border w-1/2 auto-expand bg-[#000] text-[#E1FF3C] active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform text-center`}
            >
              {activeServiceName}
            </div>
            <ServicePlan
              plan={plan}
              activePlan={activePlan}
              editMode={editMode}
              handlePlanClick={handlePlanClick}
            />
            {planAction && (
              <div className="mt-4 flex justify-end gap-6">
                <button
                  className={`active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform px-6 h-10 rounded-md  text-[#000] font-semibold  border ${
                    activePlan ? "bg-[#E1FF3C]" : "bg-[#ccc] text-[#fff]"
                  }`}
                  onClick={handlePlanConfirmClick}
                >
                  Confirm
                </button>
                <button
                  className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform h-10 px-6 rounded-md text-[#000] border"
                  onClick={handlePlanCancel}
                >
                  Cancel
                </button>
              </div>
            )}
          </>
        )}
        {/* EndDiv */}

        {/* Plan&TypeSelectedDiv */}
        {planConfirm && !editMode && (
          <>
            <div className="flex mt-4 w-full box-border gap-4 flex-wrap">
              {/* Render your plan options here */}
              <div
                className={
                  "py-4 px-16 border w-full bg-[#000] text-[#E1FF3C] active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform text-center"
                }
              >
                {activeServiceName}
              </div>
            </div>
            <div className="flex mt-4 w-full box-border gap-4 flex-wrap">
              {/* Render your plan options here */}
              <p className="font-bold">Service Plan</p>
              <div
                className={
                  "py-2 md:py-3 lg:py-4 px-16 border w-full bg-[#000] text-[#E1FF3C] active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform flex justify-between gap-4 flex-wrap"
                }
              >
                <p>{activePlanName.name}</p>
                <p>{activePlanName.mb}</p>
                <p>{activePlanName.price}</p>
              </div>
            </div>
            <div className="mt-8 flex justify-end gap-6">
              <div
                className="cursor-pointer flex items-center justify-center active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform px-2 h-8 rounded-md  text-[#2c2b2b] text-sm font-semibold bg-[#fff] border border-6 border-[#393131] "
                onClick={handleEditClick}
              >
                <span className="mr-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_474)">
                      <path
                        d="M6.81411 2.18538L9.81458 5.18585L3.29919 11.7012L0.624029 11.9966C0.265904 12.0362 -0.0366742 11.7333 0.00316958 11.3752L0.300826 8.69819L6.81411 2.18538ZM11.6704 1.73866L10.2615 0.329834C9.82208 -0.109619 9.10934 -0.109619 8.66989 0.329834L7.3445 1.65522L10.345 4.65569L11.6704 3.3303C12.1098 2.89061 12.1098 2.17812 11.6704 1.73866Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_474">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Edit your plan
              </div>
            </div>
          </>
        )}
        {/* EndDiv */}
      </div>
    </>
  );
};

export default Service;
