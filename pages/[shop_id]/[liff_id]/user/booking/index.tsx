import CalendarUser from "@/components/user/calendarUser";
import UserBookingLayout from "@/layouts/UserBookingLayout";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "framer-motion";
import TimeSelect from "@/components/user/TimeSelect";
import GenderSelect from "@/components/user/GenderSelect";
import AgeSelect from "@/components/user/AgeSelect";
import BookingForm from "@/components/user/BookingForm";
import ConfirmSelect from "@/components/user/ConfirmSelect";

const Booking = () => {
  const stepCount = 6;
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [selectedAge, setSelectedAge] = useState<string>("");
  const [form, setForm] = useState({
    contactName: "",
    contactPhone: "",
    additionalContact: "",
    notesToArtist: "",
  });
  const [agreed, setAgreed] = useState<boolean>(false);
  const [payload, setPayload] = useState<{
    date: string;
    time: string;
    lineName: string;
    contactName: string;
    contactPhone: string;
  }>();

  const mockedTimeSlots = [
    { id: "1", time: "09:00", isAvailable: true },
    { id: "2", time: "10:00", isAvailable: true },
    { id: "3", time: "11:00", isAvailable: true },
    { id: "4", time: "12:00", isAvailable: false },
    { id: "5", time: "13:00", isAvailable: true },
  ];

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  const handleAgeSelect = (age: string) => {
    setSelectedAge(age);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAgreed = (agreed: boolean) => {
    setAgreed(agreed);
  };

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

  useEffect(() => {
    setPayload({
      date: "2023-10-01",
      time: selectedTime,
      lineName: "ทะนะกอนนน",
      contactName: form.contactName,
      contactPhone: form.contactPhone,
    });
  }, [selectedTime, form, selectedGender, selectedAge]);

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
              className="w-full flex flex-col items-center h-full gap-16"
            >
              <header className="space-y-3 text-center">
                <h1 className="text-3xl font-semibold text-neutral-900">
                  เลือกวันที่ต้องการ
                </h1>
                <p className="text-neutral-500">
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
              className="w-full flex flex-col items-center h-full gap-16"
            >
              <header className="space-y-3 text-center">
                <h1 className="text-3xl font-semibold text-neutral-900">
                  เลือกเวลาที่ต้องการ
                </h1>
                <p className="text-neutral-500">
                  เลือกเวลาที่สะดวกเข้ามาสักที่ร้าน <br />
                  ควรมา<span className="underline">ก่อนเวลา 15 นาที</span>
                </p>
              </header>
              <TimeSelect
                timeSlots={mockedTimeSlots}
                onTimeSelect={handleTimeSelect}
                selectedTime={selectedTime}
              />
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
              className="w-full flex flex-col items-center h-full gap-16"
            >
              <header className="space-y-3 text-center">
                <h1 className="text-3xl font-semibold text-neutral-900">
                  คุณคือเพศอะไร
                </h1>
                <p className="text-neutral-500">
                  เพื่อมอบประสบการณ์การจองที่ดีที่สุด เราจำเป็นต้องรู้เพศของคุณ
                </p>
              </header>
              <GenderSelect
                onGenderSelect={handleGenderSelect}
                selectedGender={selectedGender}
              />
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
              className="w-full flex flex-col items-center h-full gap-16"
            >
              <header className="space-y-3 text-center">
                <h1 className="text-3xl font-semibold text-neutral-900">
                  คุณอายุเท่าไหร่
                </h1>
                <p className="text-neutral-500">
                  เพื่อมอบประสบการณ์การสักที่ดีที่สุด เราจำเป็นต้องรู้อายุของคุณ
                </p>
              </header>
              <AgeSelect
                onAgeSelect={handleAgeSelect}
                selectedAge={selectedAge}
              />
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
              className="w-full flex flex-col items-center h-full gap-10"
            >
              <header className="space-y-3 text-center">
                <h1 className="text-3xl font-semibold text-neutral-900">
                  ระบุข้อมูลเพิ่มเติม
                </h1>
                <p className="text-neutral-500">
                  เพิ่อความสะดวกในการติดต่อและการจองคิว กรุณาระบุข้อมูลเพิ่มเติม
                </p>
              </header>
              <BookingForm form={form} onFormChange={handleFormChange} />
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
              className="w-full flex flex-col items-center h-full gap-8"
            >
              <header className="space-y-3 text-center">
                <h1 className="text-3xl font-semibold text-neutral-900">
                  ตรวจสอบข้อมูล
                </h1>
                <p className="text-neutral-500">
                  ตรวจสอบวันที่ เวลา และข้อมูลก่อนจองคิวสัก
                </p>
              </header>
              <ConfirmSelect
                onAgreed={handleAgreed}
                agreed={agreed}
                payload={payload}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {/* <CalendarUser /> */}
      </UserBookingLayout>
    </>
  );
};

export default Booking;
