import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";

function FormContainer() {
  const [step, setStep] = useState(1);

  function handleStep(value: number) {
    setStep(value);
  }
  return (
    <div
      className="px-4 md:px-10 lg:px-25 bg-cover bg-no-repeat bg-center flex flex-col gap-10.5 py-15 "
      style={{
        backgroundImage: "url('/application_page_form_bg.png')",
      }}
    >
      {/* <ApplicationSubmittedModal /> */}
      {step === 1 && <StepOne handleNext={handleStep} />}
      {step === 2 && <StepTwo handleNext={handleStep} />}
      {step === 3 && <StepThree handleNext={handleStep} />}
      {step === 4 && <StepFour handleNext={handleStep} />}
      {step === 5 && <StepFive handleNext={handleStep} />}
      <span className="text-lg md:text-2xl text-price-banner font-semibold text-center">
        {step}/5
      </span>
    </div>
  );
}

export default FormContainer;
