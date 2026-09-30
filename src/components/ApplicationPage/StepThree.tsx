import { IoArrowBackOutline, IoArrowForwardSharp } from "react-icons/io5";

type StepThreeProps = {
  handleNext: (value: number) => void;
};

function StepThree({ handleNext }: StepThreeProps) {
  return (
    <div className="flex flex-col rounded-3xl border border-form-border border-t-0 overflow-hidden relative p-8 gap-12">
      <div className="w-full h-1.5 bg-linear-to-r from-[#2563EB] to-[#7C3AED] top-0 left-0 absolute"></div>
      <div className="flex flex-col gap-4">
        {/* Your Skills */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl text-price-banner">Your Idea</h3>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                Do you already have a solution idea? *
              </label>
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className="text-header-text text-base">
                    Yes, I have an idea
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className="text-header-text text-base">
                    No, I would like to develop an idea during the programme
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                If Yes, what problem are you trying to solve? *
              </label>
              <textarea className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none min-h-47.75"></textarea>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                Who is affected by this problem? *
              </label>
              <textarea className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none min-h-47.75"></textarea>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                Describe your proposed solution *
              </label>
              <textarea className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none min-h-47.75"></textarea>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                How would AI or technology contribute to the solution? *
              </label>
              <textarea className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none min-h-47.75"></textarea>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                Who would benefit from the solution? *
              </label>
              <textarea className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none min-h-47.75"></textarea>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                What makes your approach different or useful? *
              </label>
              <textarea className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none min-h-47.75"></textarea>
            </div>

            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                What stage is your idea currently at? *
              </label>
              <div className="flex items-center gap-x-12 gap-y-6 flex-wrap">
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className="text-header-text text-base">
                    Idea only
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className="text-header-text text-base">
                    Research completed
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className="text-header-text text-base">
                    Early concept
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className="text-header-text text-base">
                    Working prototype
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className="text-header-text text-base">
                    Prototype
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className="text-header-text text-base">
                    Existing product/project
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className="text-header-text text-base">
                    Research project
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                Do you already have a prototype?
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

            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-xl text-header-text font-semibold"
              >
                If yes, prototype/project link
              </label>
              <div className="rounded-xl bg-form-input flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                {/* <LuPhone className="w-6 h-6" /> */}
                <input
                  type="url"
                  placeholder="URL"
                  className="text-base text-input-text outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>
      </div>

      <div className="flex gap-6 items-center">
        <button
          onClick={() => handleNext(2)}
          className="flex items-center gap-2 border-3 h-14 flex-1 border-special-green-icon text-special-green-icon font-bold text-lg rounded-md px-6 py-3 justify-center"
        >
          <IoArrowBackOutline className="w-6 h-6" />
          Previous
        </button>
        <button
          onClick={() => handleNext(4)}
          className="flex items-center gap-2 h-14 flex-1 bg-accent-orange text-white font-bold text-lg rounded-md px-6 py-3 justify-center"
        >
          Next
          <IoArrowForwardSharp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default StepThree;
