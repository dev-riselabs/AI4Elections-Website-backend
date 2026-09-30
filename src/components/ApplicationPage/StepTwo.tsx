import { IoArrowBackOutline, IoArrowForwardSharp } from "react-icons/io5";

type StepTwoProps = {
  handleNext: (value: number) => void;
};

function StepTwo({ handleNext }: StepTwoProps) {
  return (
    <div className="flex flex-col rounded-3xl border border-form-border border-t-0 overflow-hidden relative p-8 gap-12">
      <div className="w-full h-1.5 bg-linear-to-r from-[#2563EB] to-[#7C3AED] top-0 left-0 absolute"></div>
      <div className="flex flex-col gap-4">
        {/* Your Skills */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl text-price-banner">Your Skills</h3>
          <div className="flex flex-col gap-4"><div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                Skills (Use (,) after each skill) *
              </label>
              <textarea className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none"></textarea>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                Tell us about your relevant experience *
              </label>
              <textarea className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none min-h-47.75"></textarea>
            </div>
            </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>

        {/* Your Interest */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl text-price-banner">Your Interest</h3>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
               Which challenge track interests you most? *
              </label>
              <select className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <option value="">Select track</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                Why are you interested in this challenge area? *
              </label>
              <textarea className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none min-h-47.75"></textarea>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>
      </div>

      <div className="flex gap-6 items-center">
        <button onClick={()=> handleNext(1)} className="flex items-center gap-2 border-3 h-14 flex-1 border-special-green-icon text-special-green-icon font-bold text-lg rounded-md px-6 py-3 justify-center">
        
        <IoArrowBackOutline className="w-6 h-6" />
        Previous
      </button>
        <button onClick={()=> handleNext(3)} className="flex items-center gap-2 h-14 flex-1 bg-accent-orange text-white font-bold text-lg rounded-md px-6 py-3 justify-center">
              Next
              <IoArrowForwardSharp className="w-6 h-6" />
            </button></div>
    </div>
  );
}

export default StepTwo;
