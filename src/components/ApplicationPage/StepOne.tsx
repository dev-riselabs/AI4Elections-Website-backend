import { HiOutlineMail } from "react-icons/hi";
import { IoArrowForwardSharp } from "react-icons/io5";
import { LuPhone, LuUser } from "react-icons/lu";
import { TbBriefcase2 } from "react-icons/tb";
import LocationFields from "../LocationFields";

type StepOneProps = {
    handleNext :  (value: number) => void;
}

function StepOne({handleNext} : StepOneProps) {
  return (
    <div className="flex flex-col rounded-3xl border border-form-border border-t-0 overflow-hidden relative p-4 md:p-8 gap-12">
      <div className="w-full h-1.5 bg-linear-to-r from-[#2563EB] to-[#7C3AED] top-0 left-0 absolute"></div>
      <div className="flex flex-col gap-4">
        {/* personal information */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl md:text-2xl text-price-banner">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-semibold"
              >
                First Name *
              </label>
              <div className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <LuUser className="w-5 md:w-6 h-5 md:h-6" />
                <input
                  type="text"
                  placeholder="John"
                  className="text-sm md:text-base text-input-text outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-semibold"
              >
                Last Name *
              </label>
              <div className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <LuUser className="w-5 md:w-6 h-5 md:h-6" />
                <input
                  type="text"
                  placeholder="Doe"
                  className="text-sm md:text-base text-input-text outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-semibold"
              >
                Email Address *
              </label>
              <div className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <HiOutlineMail className="w-5 md:w-6 h-5 md:h-6" />
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="text-sm md:text-base text-input-text outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-semibold"
              >
                Phone Number *
              </label>
              <div className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <LuPhone className="w-5 md:w-6 h-5 md:h-6" />
                <input
                  type="text"
                  placeholder="(555) 123-5672"
                  className="text-sm md:text-base text-input-text outline-none"
                />
              </div>
            </div>
            <LocationFields />
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-semibold"
              >
                What best describe your application? *
              </label>
              <select className="rounded-xl bg-form-input text-sm md:text-base flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <option value="">Select</option>
              </select>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>
        {/* background */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl md:text-2xl text-price-banner">Your Background</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-semibold"
              >
                Tell us about your experience *
              </label>
              <textarea className="rounded-xl bg-form-input text-sm md:text-base flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none"></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-semibold"
              >
               Primary Area of Expertise *
              </label>
              <select className="rounded-xl bg-form-input text-sm md:text-base flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <option value="">Select</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-semibold"
              >
                Years of Experience *
              </label>
              <div className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <TbBriefcase2 className="w-5 md:w-6 h-5 md:h-6" />
                <input
                  type="text"
                  placeholder="4"
                  className="text-sm md:text-base text-input-text outline-none"
                />
              </div>
            </div>
             <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-semibold"
              >
                Current Role / Occupation *
              </label>
              <div className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                {/* <TbBriefcase2 className="w-5 md:w-6 h-5 md:h-6" /> */}
                <input
                  type="text"
                  placeholder="Enter your current role"
                  className="text-sm md:text-base text-input-text outline-none flex-1"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-semibold"
              >
                Organisation / Institution *
              </label>
              <div className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                {/* <TbBriefcase2 className="w-5 md:w-6 h-5 md:h-6" /> */}
                <input
                  type="text"
                  placeholder="Enter organisation or institution"
                  className="text-sm md:text-base text-input-text outline-none flex-1"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-semibold"
              >
               Highest level of Education *
              </label>
              <select className="rounded-xl bg-form-input text-sm md:text-base flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <option value="">Select</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-semibold"
              >
                Academic / Professional Field *
              </label>
              <div className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                {/* <TbBriefcase2 className="w-5 md:w-6 h-5 md:h-6" /> */}
                <input
                  type="text"
                  placeholder="Enter your field"
                  className="text-sm md:text-base text-input-text outline-none flex-1"
                />
              </div>
            </div>
            
          </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>
      </div>
      <button onClick={()=> handleNext(2)} className="flex items-center gap-2 bg-accent-orange text-white font-bold text-lg rounded-md px-6 py-3 justify-center">
        Next
        <IoArrowForwardSharp className="w-5 md:w-6 h-5 md:h-6" />
      </button>
    </div>
  );
}

export default StepOne;
