import { useState } from "react";
import { ApiRequestError, postForm } from "../../lib/api";
import ApplicationSubmittedModal from "./ApplicationSubmittedModal";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";



function FormContainer() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<ApiRequestError | null>(null);

  function handleStep(value: number) {
    setStep(value);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // console.log(event.currentTarget)
      await postForm("/applications", new FormData(event.currentTarget));
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof ApiRequestError
          ? error
          : new ApiRequestError("Your submission could not be completed."),
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className="px-4 md:px-10 lg:px-25 bg-cover bg-no-repeat bg-center flex flex-col gap-10.5 py-15 "
      style={{
        backgroundImage: "url('/application_page_form_bg.png')",
      }}
    >
      <form onSubmit={handleSubmit} noValidate>
        {submitError && (
          <div role="alert" className="mb-5 rounded-md border border-red-700 bg-white p-4 text-red-800">
            <p>{submitError.message}</p>
            {Object.entries(submitError.errors).map(([field, messages]) => (
              <p key={field}>{field.replaceAll("_", " ")}: {messages.join(" ")}</p>
            ))}
          </div>
        )}
        <div hidden={step !== 1}><StepOne handleNext={handleStep} /></div>
        <div hidden={step !== 2}><StepTwo handleNext={handleStep} /></div>
        <div hidden={step !== 3}><StepThree handleNext={handleStep} /></div>
        <div hidden={step !== 4}><StepFour handleNext={handleStep} /></div>
        <div hidden={step !== 5}><StepFive isSubmitting={isSubmitting} /></div>
      </form>
      {submitted && <ApplicationSubmittedModal />}
      <span className="text-lg md:text-2xl text-price-banner font-semibold text-center">
        {step}/5
      </span>
    </div>
  );
}

export default FormContainer;
