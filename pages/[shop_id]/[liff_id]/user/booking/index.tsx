import UserBookingLayout from "@/layouts/UserBookingLayout";
import { useState } from "react";

const Booking = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const stepCount = 6;

  const handleNextStep = () => {
    setCurrentStep((prev) => {
      return prev === stepCount ? stepCount : prev + 1;
    });
  };

  const handlePreviousStep = () => {
    setCurrentStep((prev) => {
      return prev > 1 ? prev - 1 : 1;
    });
  };

  return (
    <>
      <UserBookingLayout
        currentStep={currentStep}
        stepCount={stepCount}
        onPressBack={handlePreviousStep}
        onPressNext={handleNextStep}
      >
        <p>test {currentStep}</p>
      </UserBookingLayout>
    </>
  );
};

export default Booking;
