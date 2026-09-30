import { IoArrowForwardSharp } from "react-icons/io5";

function ApplicationSubmittedModal() {
  return (
    <div className="fixed w-full h-screen bg-black/50 flex items-center justify-center px-4 z-30 inset-0">
      <div
        className="flex flex-col items-center gap-21 rounded-[100px] bg-center bg-no-repeat bg-cover px-12.5 py-25 max-w-217.75 max-h-[90vh] overflow-y-auto mx-auto"
        style={{ backgroundImage: "url('/why_ai4election_bg.png')" }}
      >
        <div className="flex flex-col items-center gap-12.5">
          <div className="flex items-center gap-6">
            <h2 className="text-2xl font-semibold text-white">
              Application Submitted
            </h2>
            <div className="w-11.5 h-11.5 rounded-full bg-accent-green"></div>
          </div>
          <p className="text-center text-2xl text-white">
            Thank you for applying to Rise Networks #AI4Elections Hackathon
            2026.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center text-xl text-white">
          <p className="text-center">
            Congratulations, your application has been successfully received.
          </p>
          <p className="text-center">
            We appreciate your interest in contributing your skills, ideas and
            perspective to a national community exploring responsible artificial
            intelligence and technology for electoral innovation, integrity and
            inclusion.
          </p>
        </div>
        <button className="flex items-center gap-2 w-auto bg-accent-orange text-white font-bold text-lg rounded-md px-8 py-3 justify-center">
          Explore #AI4Elections
          <IoArrowForwardSharp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default ApplicationSubmittedModal;
