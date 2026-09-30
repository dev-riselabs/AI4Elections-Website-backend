import { HiOutlineMail } from "react-icons/hi";
import { IoArrowForwardSharp } from "react-icons/io5";
import { LuPhone, LuUser } from "react-icons/lu";
import CommunitySubmittedModal from "./CommunitySubmittedModal";

function FormContainer() {
  return (
    <div
      className="px-4 md:px-10 lg:px-25 bg-cover bg-no-repeat bg-center flex flex-col gap-10.5 py-15"
      style={{
        backgroundImage: "url('/application_page_form_bg.png')",
      }}
    >
      {/* <CommunitySubmittedModal/> */}
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
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-base md:text-xl text-header-text font-semibold"
                >
                  Country of Residence *
                </label>
                <select className="rounded-xl bg-form-input text-sm md:text-base flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                  <option value="">Select country</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-base md:text-xl text-header-text font-semibold"
                >
                  State of Residence *
                </label>
                <select className="rounded-xl bg-form-input text-sm md:text-base flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                  <option value="">Select state</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-base md:text-xl text-header-text font-semibold"
                >
                  City *
                </label>
                <select className="rounded-xl bg-form-input text-sm md:text-base flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                  <option value="">Select city</option>
                </select>
              </div>
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
                  What areas are you interested in? *
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
                  How would you like to participate? *
                </label>
                <select className="rounded-xl bg-form-input text-sm md:text-base flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                  <option value="">Select City</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-base md:text-xl text-header-text font-semibold"
                >
                  Education Qualification *
                </label>
                <select className="rounded-xl bg-form-input text-sm md:text-base flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                  <option value="">Select</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-semibold"
              >
                Tell us a little about yourself *
              </label>
              <textarea placeholder="Briefly tell us about your interests, experience or what you hope to contribute." className="rounded-xl bg-form-input flex text-sm md:text-base items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none h-30 md:h-47.5"></textarea>
            </div>
            </div>
          </div>

          {/* divider */}
          <div className="max-w-147.25 bg-divider w-full h-0.5"></div>


           {/* Community Consent *  */}
        <div className="flex flex-col gap-4 pb-3">
          <h3 className="text-xl md:text-2xl text-price-banner">Community Consent *</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className="text-header-text text-sm md:text-base">
                I agree to join the #AI4Elections Community of Practice and allow my information to be used to facilitate relevant community activities, collaboration, mentorship and research opportunities.
              </label>
            </div>
          </div>
        </div>

        {/* divider */}
          <div className="max-w-147.25 bg-divider w-full h-0.5"></div>


           {/* Email Updates */}
        <div className="flex flex-col gap-4 pb-3">
          <h3 className="text-xl md:text-2xl text-price-banner">Email Updates</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className="text-header-text text-sm md:text-base">
               I would like to receive relevant #AI4Elections community updates and opportunities by email.
              </label>
            </div>
          </div>
        </div>
          

          {/* divider */}
          <div className="max-w-147.25 bg-divider w-full h-0.5"></div>
        </div>
        <button className="flex items-center gap-2 bg-accent-orange text-white font-bold text-sm md:text-lg rounded-md px-2 md:px-6 py-3 justify-center">
          Join the Community of Practice
          <IoArrowForwardSharp className="w-5 md:w-6 h-5 md:h-6" />
        </button>
      </div>
    </div>
  );
}

export default FormContainer;
