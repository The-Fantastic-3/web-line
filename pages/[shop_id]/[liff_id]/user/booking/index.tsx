import CalendarUser from "@/components/user/calendarUser";
import UserBookingLayout from "@/layouts/UserBookingLayout";
import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "framer-motion";

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
        <AnimatePresence>
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="w-full"
            >
              <header className="space-y-3 text-center">
                <h1 className="text-3xl font-semibold text-primary-900">
                  เลือกวันที่ต้องการ
                </h1>
                <p className="text-primary-800">
                  กรุณาเลือกวันที่ที่ต้องการจอง
                </p>
              </header>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="w-full"
            >
              <header className="space-y-3 text-center">
                <h1 className="text-3xl font-semibold text-primary-900">
                  เลือกเวลาที่ต้องการ
                </h1>
                <p className="text-primary-800">
                  เลือกเวลาที่สะดวกเข้ามาสักที่ร้าน <br />
                  ควรมา<span className="underline">ก่อนเวลา 15 นาที</span>
                </p>
              </header>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="w-full"
            >
              <header className="space-y-3 text-center">
                <h1 className="text-3xl font-semibold text-primary-900">
                  คุณคือเพศอะไร
                </h1>
                <p className="text-primary-800">
                  เพื่อมอบประสบการณ์การจองที่ดีที่สุด เราจำเป็นต้องรู้เพศของคุณ
                </p>
              </header>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {currentStep === 4 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="w-full"
            >
              <header className="space-y-3 text-center">
                <h1 className="text-3xl font-semibold text-primary-900">
                  คุณอายุเท่าไหร่
                </h1>
                <p className="text-primary-800">
                  เพื่อมอบประสบการณ์การสักที่ดีที่สุด เราจำเป็นต้องรู้อายุของคุณ
                </p>
              </header>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {currentStep === 5 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="w-full"
            >
              <header className="space-y-3 text-center">
                <h1 className="text-3xl font-semibold text-primary-900">
                  ระบุข้อมูลเพิ่มเติม
                </h1>
                <p className="text-primary-800">
                  เพิ่อความสะดวกในการติดต่อและการจองคิว กรุณาระบุข้อมูลเพิ่มเติม
                </p>
              </header>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {currentStep === 6 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="w-full"
            >
              <header className="space-y-3 text-center">
                <h1 className="text-3xl font-semibold text-primary-900">
                  ตรวจสอบข้อมูล
                </h1>
                <p className="text-primary-800">
                  ตรวจสอบวันที่ เวลา และข้อมูลก่อนจองคิวสัก
                </p>
              </header>
            </motion.div>
          )}
        </AnimatePresence>
        {/* <CalendarUser /> */}
      </UserBookingLayout>
    </>
  );
};

export default Booking;
