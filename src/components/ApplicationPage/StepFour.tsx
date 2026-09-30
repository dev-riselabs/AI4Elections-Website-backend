import { IoArrowBackOutline, IoArrowForwardSharp } from "react-icons/io5";
import { LuUser } from "react-icons/lu";

type StepFourProps = {
  handleNext: (value: number) => void;
};

function StepFour({ handleNext }: StepFourProps) {
  return (
    <div className="flex flex-col rounded-3xl border border-form-border border-t-0 overflow-hidden relative p-8 gap-12">
      <div className="w-full h-1.5 bg-linear-to-r from-[#2563EB] to-[#7C3AED] top-0 left-0 absolute"></div>
      <div className="flex flex-col gap-4">
        {/* Applying as an Individual */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl text-price-banner">
            Applying as an Individual
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                What type of collaborator would you like to work with?
              </label>
              <select className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <option value="">Select</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                Would you like to participate in team matching?
              </label>
              <div className="flex items-center gap-12 flex-wrap">
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className="text-header-text text-base">
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className="text-header-text text-base">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>

        {/* Applying as an existing team */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl text-price-banner">
            Applying as an existing team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                Team Name
              </label>
              <div className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                {/* <LuUser className="w-6 h-6" /> */}
                <input
                  type="text"
                  placeholder=""
                  className="text-base text-input-text outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                Team Lead
              </label>
              <div className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <LuUser className="w-6 h-6" />
                <input
                  type="text"
                  placeholder=""
                  className="text-base text-input-text outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                Team size
              </label>
              <div className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <LuUser className="w-6 h-6" />
                <input
                  type="text"
                  placeholder="4"
                  className="text-base text-input-text outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                Team Description
              </label>
              <textarea className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none min-h-47.75"></textarea>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                Names and Role of Team Members ( use (,) after each name and
                role)
              </label>
              <textarea className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none min-h-47.75"></textarea>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>

        {/* Accessibility & Participation needs */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl text-price-banner">
            Accessibility & Participation needs
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                Do you have any accessibility or participation requirements you
                would like us to consider?
              </label>
              <div className="flex items-center gap-12 flex-wrap">
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className="text-header-text text-base">
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className="text-header-text text-base">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                If yes, please tell us what support you may require
              </label>
              <textarea className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none min-h-47.75"></textarea>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>
      </div>

      <div className="flex gap-6 items-center">
        <button
          onClick={() => handleNext(3)}
          className="flex items-center gap-2 border-3 h-14 flex-1 border-special-green-icon text-special-green-icon font-bold text-lg rounded-md px-6 py-3 justify-center"
        >
          <IoArrowBackOutline className="w-6 h-6" />
          Previous
        </button>
        <button
          onClick={() => handleNext(5)}
          className="flex items-center gap-2 h-14 flex-1 bg-accent-orange text-white font-bold text-lg rounded-md px-6 py-3 justify-center"
        >
          Next
          <IoArrowForwardSharp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default StepFour;
