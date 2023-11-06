import React from "react";
import Label from "./Label";
// JUST TESTING COMPONENT SPLIT

const InputText = ({errors, register, type, inputName,}) => {
  let message = null;
  if(inputName === 'fullName'){
message="please fill your name"
  } else if(inputName === 'mobile'){
    message="please fill your mobile number"
  }
  else message=null
  // console.log(inputName)
  const error = errors.inputName;
  console.log(error)
  return (
    <>
     <div className="flex flex-col md:flex-row w-full md:items-center">
              <Label name="Full Name" />
              <div className=" flex flex-col md:w-2/3 w-full mt-3 md:mt-0">
                { error && error.type === "required" && (
                  <>
                    <span className="text-red-600 text-sm">
                      {message}
                    </span>
                    
                  </>
                )}
                <input
                  className={`p-2 border border-1 border-[#887e7e] rounded-md   mt-1 bg-transparent ${
                    error &&
                    error.type === "required" &&
                    "border-red-600"
                  }`}
                  type={type}
                  {...register("inputName", {
                    required: {
                      value: true,
                      message: message,
                    },
                  })}
                />

                <p className="text-sm mt-1">
                  Note: Do not include (U, Daw, Ko, Mg, Ma, etc)
                </p>
              </div>
            </div>
    </>
  );
};

export default InputText;
