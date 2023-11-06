import React from "react";
import Radio from "./Radio";
const InputRadio = ({ errors, register, name }) => {

  return (
    <div>
      <div className="flex flex-col md:flex-row mt-8 w-full ">
        <label
          className={`text-md font-medium w-1/3 after:content-['*'] after:ml-0.5 after:text-red-500 
                }`}
        >
          Residential Type
        </label>

        <div className=" flex md:w-2/3 w-full mt-3 md:mt-0">
          <div className="w-full">
            <div className="flex flex-col">
              <div className="flex flex-wrap  md:justify-between">
                <Radio
                  errors={errors}
                  register={register}
                  value={"housing"}
                  label={"Housing"}
                />

                <Radio
                  errors={errors}
                  register={register}
                  value={"residence"}
                  label={"Residence"}
                />

                <Radio
                  errors={errors}
                  register={register}
                  value={"business"}
                  label={"Business"}
                />

                <Radio
                  errors={errors}
                  register={register}
                  value={"other"}
                  label={"other"}
                />
              </div>
            </div>
            <div className="w-full">
              {name === "other" && (
                <div className="mt-4 flex flex-col w-full">
                  <textarea
                    className={`p-2 border border-1 border-[#887e7e] rounded-md   mt-1 bg-transparent ${
                      errors.address &&
                      errors.address.type === "required" &&
                      "border-red-600"
                    }`}
                    rows="3"
                    cols="20"
                    {...register("others", {
                      required: {
                        value: true,
                        message: "Please fill your residential type",
                      },
                    })}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-1/3 hidden md:block"></div>
        <div className="w-full md:w-2/3">
          {errors.name && errors.name.type === "required" && (
            <span className="text-red-600 text-sm mb-4">
              {errors.name.message}
            </span>
          )}
        </div>
      </div>
      {name === "other" && (
        <div className="w-full flex">
          <div className="w-1/3 hidden md:block"></div>
          <div className="w-full md:w-2/3">
            {errors.others && errors.others.type === "required" && (
              <>
                <span className="text-red-600 text-sm mb-2">
                  {errors.others.message}
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InputRadio;
