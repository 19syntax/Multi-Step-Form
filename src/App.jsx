import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";

const App = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    age: "",
    account: "",
  });
  const [error, setError] = useState({});

  const validate = (step) => {
    const newError = {};

    if (step === 1) {
      if (formData.name === "") {
        newError.name = "Enter a valid name";
      }
      if (!formData.email.includes("@")) {
        newError.email = "Enter a valid name";
      }
      if (formData.phoneNumber.length <= 10) {
        newError.phoneNumber = "Enter a vaild phone number";
      }
    }

    if (step === 2) {
      if (formData.address === "") {
        newError.address = "Enter an address";
      }
      if (formData.age === "") {
        newError.age = "Enter a valid age";
      }
      if (formData.account === "") {
        newError.account = "Enter a vaild account number";
      }
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleDisplay = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            validate={validate}
            step={currentStep}
            setStep={setCurrentStep}
            formData={formData}
            setFormData={setFormData}
            error={error}
          />
        );
      case 2:
        return (
          <StepTwo
            validate={validate}
            step={currentStep}
            setStep={setCurrentStep}
            formData={formData}
            setFormData={setFormData}
            error={error}
          />
        );
      case 3:
        return (
          <StepThree
            validate={validate}
            step={currentStep}
            setStep={setCurrentStep}
            formData={formData}
            setFormData={setFormData}
            error={error}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="md:flex md:justify-center md:items-center h-screen w-screen">
      <div className="relative md:static md:flex gap-8 bg-[hsl(206_94%_87%)] md:bg-white md:min-h-125 md:p-3 rounded-xl">
        <Sidebar step={currentStep} />
        <div className="absolute md:static w-[90%] flex justify-center md:px-0 md:py-0 px-5 py-6 md:my-0 my-20 bg-white z-50 md:z-0 rounded-2xl">
          {handleDisplay()}
        </div>
      </div>
    </div>
  );
};

export default App;
