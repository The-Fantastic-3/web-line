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
import moment from "moment";

const Booking = () => {
  const stepCount = 6;
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [selectedAge, setSelectedAge] = useState<string>("");
  const [form, setForm] = useState({
    contactName: "",
    contactPhone: "",
    notesToArtist: "",
  });
  const [agreed, setAgreed] = useState<boolean>(false);
  const [payload, setPayload] = useState<{
    date: string;
    time: string;
    contactName: string;
    contactPhone: string;
  }>();
  const [disabledBtn, setDisabledBtn] = useState<boolean>(true);

  const mockedTimeSlots = [
    { id: "1", time: "09:00", isAvailable: true },
    { id: "2", time: "10:00", isAvailable: true },
    { id: "3", time: "11:00", isAvailable: true },
    { id: "4", time: "12:00", isAvailable: false },
    { id: "5", time: "13:00", isAvailable: true },
    { id: "6", time: "14:00", isAvailable: true },
    { id: "7", time: "15:00", isAvailable: true },
    { id: "8", time: "16:00", isAvailable: true },
  ];

  const handleDateSelect = (date: moment.Moment) => {
    setSelectedDate(date);
  };

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
      date: selectedDate ? selectedDate.format("DD MMMM YYYY") : "",
      time: selectedTime,
      contactName: form.contactName.trim(),
      contactPhone: form.contactPhone.trim(),
    });
  }, [selectedDate, selectedTime, form, selectedGender, selectedAge]);

  useEffect(() => {
    if (currentStep === 1 && !selectedDate) {
      setDisabledBtn(true);
    } else if (currentStep === 2 && !selectedTime) {
      setDisabledBtn(true);
    } else if (currentStep === 3 && !selectedGender) {
      setDisabledBtn(true);
    } else if (currentStep === 4 && !selectedAge) {
      setDisabledBtn(true);
    } else if (
      currentStep === 5 &&
      (!form.contactName || !form.contactPhone || form.contactPhone.length < 12)
    ) {
      setDisabledBtn(true);
    } else if (currentStep === 6 && !agreed) {
      setDisabledBtn(true);
    } else {
      setDisabledBtn(false);
    }
  }, [
    selectedDate,
    currentStep,
    selectedTime,
    selectedGender,
    selectedAge,
    form,
    agreed,
  ]);

  return (
    <>
      <UserBookingLayout
        currentStep={currentStep}
        stepCount={stepCount}
        onPressBack={handlePreviousStep}
        onPressNext={handleNextStep}
        isDisabled={disabledBtn}
        payload={payload}
      >
        <AnimatePresence>
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="w-full flex flex-col items-center h-full gap-8"
            >
              <header className="space-y-3 text-center">
                <h1 className="text-3xl font-semibold text-deeper-grey">
                  เลือกวันที่ต้องการ
                </h1>
                <p className="text-neutral-500">
                  กรุณาเลือกวันที่ที่ต้องการจอง
                </p>
              </header>
              <CalendarUser
                onSelectDate={handleDateSelect}
                dateSelection={selectedDate}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="w-full flex flex-col items-center h-full gap-16"
            >
              <header className="space-y-3 text-center">
                <h1 className="text-3xl font-semibold text-deeper-grey">
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
                <h1 className="text-3xl font-semibold text-deeper-grey">
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
                <h1 className="text-3xl font-semibold text-deeper-grey">
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
                <h1 className="text-3xl font-semibold text-deeper-grey">
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
                <h1 className="text-3xl font-semibold text-deeper-grey">
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
      </UserBookingLayout>
    </>
  );
};

export default Booking;
