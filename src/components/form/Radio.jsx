import React from "react";

const Radio = ({ errors, register, value, label }) => {
  let radioValue = null;
  if (value === "housing") {
    radioValue = "housing";
  } else if (value === "residence") {
    radioValue = "residence";
  } else if (value === "business") {
    radioValue = "business";
  } else radioValue = "other";

  let radioLabel = null;
  if (label === "Housing") {
    radioLabel = "Housing";
  } else if (label === "Residence") {
    radioLabel = "Residence";
  } else if (label === "Business") {
    radioLabel = "Business";
  } else radioLabel = "Other";
  
  return (
    <>
      <div className="flex pr-2 items-center">
        <input
          type="radio"
          name="residential"
          value={radioValue}
          className={`${
            errors.residential &&
            errors.residential.type === "required" &&
            "border-red-600"
          }`}
          {...register("residential", {
            required: {
              value: true,
              message: "You forget to select an option",
            },
          })}
        />

        <label className="ml-2 font-sm text-sm " for={radioValue}>
          {radioLabel}
        </label>
      </div>
    </>
  );
};

export default Radio;
