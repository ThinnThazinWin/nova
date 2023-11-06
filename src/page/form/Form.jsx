// #region load dependencies
import React, { useState } from "react";
import { useForm } from "react-hook-form";
// #endregion
// #region load components
import Label from "../../components/form/Label";
import Map from "../../components/map/Map";
import Modal from "../../components/modalbox/Modal";
// #endregion
// #region load icon
import { HiOutlineChevronDown } from "react-icons/hi";
import InputText from "../../components/form/InputText";
import InputRadio from "../../components/form/InputRadio";
// #endregion

const Form = ({ selectedServiceData }) => {
  const cities = ["Yangon", "Mandalay", "Bago", "Myaungmya"];
  const townships = ["Sanchaung", "Mayangone", "Hledan", "Hlaing"];
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(null);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fullName = watch("fullName");
  const companyName = watch("companyName");
  const applicant = watch("applicant");
  const mobile = watch("mobile");
  const email = watch("email");
  const city = watch("city");
  const township = watch("township");
  const address = watch("address");
  const residential = watch("residential");
  const others = watch("other");

  // console.log(errors)

  const onSubmit = async (formData) => {
    // Display the key/value pairs
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    setIsOpen(true);
    setFormData(formData);
    // console.log(formData)
  };

  return (
    <>
      <div className=" w-11/12 mx-auto max-w-[900px] px-10 py-2 rounded-3xl bg-white mt-8 mb-8">
        <h1 className="text-xl font-bold">Applicant Profile</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-8 w-full">
            {/* NameDiv */}
           <InputText errors={errors} register={register} type={'text'} inputName={"fullName"} />
            {/* EndDiv */}

            {/* ApplicantDiv */}
           <InputRadio errors={errors} register={register} name={applicant}/>
           <div className="flex flex-col md:flex-row mt-8  w-full ">
              <label
                className={`text-md font-medium w-1/3 after:content-['*'] after:ml-0.5 after:text-red-500 
                }`}
              >
                Applicant Type
              </label>

              <div className="flex w-full md:w-2/3 mt-3 md:mt-0">
                <div className="flex flex-col">
                  <div className="flex flex-wrap">
                    <div className="flex pr-2 items-center relative">
                      <input
                        type="radio"
                        name="applicant"
                        value="individual"
                        {...register("applicant", {
                          required: {
                            value: true,
                            message: "You forget to select an option",
                          },
                        })}
                      />
                      <label
                        className="ml-2 font-medium text-sm"
                        for="individual"
                      >
                        Individual
                      </label>
                     
                    </div>

                    <div className="flex pr-2 items-center relative">
                      <input
                        type="radio"
                        name="applicant"
                        value="company"
                        //  class={`${errors.applicant && errors.applicant.type === "required" && 'error' }`}

                        {...register("applicant", {
                          required: {
                            value: true,
                            message: "You forget to select an option",
                          },
                        })}
                      />
                      <label
                        className="ml-2 font-medium text-sm"
                        for="business"
                      >
                        Company
                      </label>
                      {/* {errors.applicant &&
                        errors.applicant.type === "required" && (
                          <div className="w-3 h-3 rounded-full border-2 border-red-500 absolute top-1 left-0"></div>
                        )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-1/3 hidden md:block"></div>
              <div className="w-full md:w-2/3">
                {errors.applicant && errors.applicant.type === "required" && (
                  <span className="text-red-600 mb-4 text-sm">
                    {errors.applicant.message}
                  </span>
                )}
              </div>
            </div>

            {applicant === "company" && (
              <>
              <div className="w-full flex flex-col md:flex-row mt-8 md:items-center">
                
                <label className={`text-md font-medium w-1/3 after:content-['*'] after:ml-0.5 after:text-red-500 
                }`}>
                  Company Name
                </label>
                <div className="w-full md:w-2/3 mt-3 md:mt-0">
                
                  <input
                    className={`w-full p-2 border border-1 border-[#887e7e] rounded-md   mt-1 bg-transparent ${
                      errors.companyName &&
                      errors.companyName.type === "required" &&
                      "border-red-600"
                    }`}
                    type="text"
                    {...register("companyName", {
                      required: {
                        value: true,
                        message: "Please fill your company name",
                      },
                    })}
                  />
                   
                </div>
              </div>
               <div className="w-full flex">
               <div className="w-1/3 hidden md:block"></div>
               <div className="w-full md:w-2/3">
                 {errors.companyName && errors.companyName.type === "required" && (
                   <span className="text-red-600 mb-4 text-sm">
                     {errors.companyName.message}
                   </span>
                 )}
               </div>
             </div>
             </>
            )}
            {/* EndDiv */}

            {/* MobileDiv */}
          <InputText errors={errors} register={register} type={'number'} inputName={"mobile"} />
            {/* EndDiv */}

            {/* EmailDiv */}
            <div>
              <div className="flex flex-col md:flex-row mt-8 w-full md:items-center">
                <Label name="Email" />
                <div className=" flex flex-col md:w-2/3 w-full mt-3 md:mt-0">
                  <input
                    className={`p-2 border border-1 border-[#887e7e] rounded-md   mt-1 bg-transparent ${
                      errors.email && "border-red-600"
                    }`}
                    type="email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "*Email* is mandatory.",
                      },
                      pattern: {
                        value:
                          /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Please enter a valid email address.",
                      },
                    })}
                  />
                </div>
              </div>
              <div className="w-full flex">
                <div className="w-1/3 hidden md:block"></div>
                <div className="w-full md:w-2/3">
                  {errors.email && errors.email.type === "required" && (
                    <span className="text-red-600 text-sm mb-2">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <span className="text-red-600">{errors.email.message}</span>
                  )}
                </div>
              </div>
            </div>
            {/* EndDiv */}

            {/* CityDiv */}
            <div>
              <div className="flex flex-col md:flex-row mt-8 w-full md:items-center">
                <Label name="City" />
                <div className=" md:w-2/3 w-full mt-3 md:mt-0 ">
                  <div className=" relative">
                    <select
                      {...register("city", {
                        required: "Please select your city",
                      })}
                      className={`block appearance-none w-full text-sm bg-white border border-[#887e7e] hover:border-gray-500 px-4 py-[12px] pr-8 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
                        errors.city ? "border-red-500" : ""
                      }`}
                    >
                      <option value="">select city</option>
                      {cities.map((city) => (
                        <option key={city} value={city} className=" text-sm ">
                          {city}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <HiOutlineChevronDown />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex">
                <div className="w-1/3 hidden md:block"></div>
                <div className="w-full md:w-2/3">
                  {errors.city && errors.city.type === "required" && (
                    <span className="text-red-600 text-sm mb-2">
                      {errors.city.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* EndDiv */}

            {/* TownshipDiv */}
            <div>
              <div className="flex flex-col md:flex-row mt-8 w-full md:items-center">
                <Label name="Township" />
                <div className=" md:w-2/3 w-full mt-3 md:mt-0">
                  <div className="relative">
                    <select
                      {...register("township", {
                        required: "Please select your township",
                      })}
                      className={`block appearance-none w-full text-sm bg-white border border-[#887e7e] hover:border-gray-500 px-4 py-[12px] pr-8 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
                        errors.township ? "border-red-500" : ""
                      }`}
                    >
                      <option value="">select township</option>
                      {townships.map((township) => (
                        <option
                          key={township}
                          value={township}
                          className=" text-sm "
                        >
                          {township}
                        </option>
                      ))}
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <HiOutlineChevronDown />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex">
                <div className="w-1/3 hidden md:block"></div>
                <div className="w-full md:w-2/3">
                  {errors.township && errors.township.type === "required" && (
                    <span className="text-red-600 text-sm mb-2">
                      {errors.township.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* EndDiv */}

            {/* AddressDiv */}
            <div>
              <div className="flex flex-col md:flex-row mt-8 w-full md:items-center">
                <Label name="Address" />
                <div className=" flex flex-col md:w-2/3 w-full mt-3 md:mt-0">
                  <textarea
                    className={`p-2 border border-1 border-[#887e7e] rounded-md   mt-1 bg-transparent ${
                      errors.address &&
                      errors.address.type === "required" &&
                      "border-red-600"
                    }`}
                    rows="3"
                    cols="20"
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Please fill your address ",
                      },
                    })}
                  />
                </div>
              </div>
              <div className="w-full flex">
                <div className="w-1/3 hidden md:block"> </div>
                <div className="w-full md:w-2/3">
                  {errors.address && errors.address.type === "required" && (
                    <span className="text-red-500 text-sm mb-2">
                      {errors.address.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* EndDiv */}

            {/* ResidentialDiv */}
           <InputRadio errors={errors} register={register} name={residential}/>

            {/* EndDiv */}

            {/* MapDiv */}
            <div className="mt-12">
              <label className="text-md font-medium w-1/3 ">
                Pin Your Address On The Map
              </label>
              <Map />
            </div>
            {/* EndDiv */}

            {/* ButtonDiv */}
            <div className="mt-8  text-center">
              <button
                className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 px-14 bg-[#000] rounded-sm text-[#E1FF3C] font-semibold text-lg"
                type="submit"
              >
                Continue
              </button>
            </div>
            {/* EndDiv */}

            {/* ModalDiv */}
            {isOpen && (
              <div>
                <Modal
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  formData={formData}
                  selectedServiceData={selectedServiceData}
                />
              </div>
            )}
            {/* EndDiv */}
      
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
