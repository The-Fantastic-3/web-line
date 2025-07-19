import NavbarUser from "@/components/user/navbarUser";
import { Head } from "./head";
import * as motion from "motion/react-client";
import { Button } from "@heroui/button";
import {
  ChevronLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { easeIn } from "framer-motion";
import React from "react";
import { useDisclosure } from "@heroui/modal";
import ModalConfirm from "@/components/user/ModalConfirm";

// Define props type for children
type UserBookingLayoutProps = {
  children: React.ReactNode;
  stepCount?: number;
  currentStep?: number | 1;
  onPressBack?: () => void;
  onPressNext?: () => void;
  isDisabled?: boolean;
  payload?: {
    date: string;
    time: string;
    lineName: string;
    contactName: string;
    contactPhone: string;
  };
};

const UserBookingLayout = ({
  children,
  stepCount,
  currentStep,
  onPressBack,
  onPressNext,
  isDisabled = false,
  payload,
}: UserBookingLayoutProps) => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: easeIn(0.8) }}
        key={"navbar"}
      >
        <nav className="w-full py-8 flex gap-2 px-6">
          {stepCount &&
            Array.from({ length: stepCount }, (_, i) => (
              <div
                key={i}
                className={
                  currentStep !== i + 1
                    ? "bg-primary-300 w-full h-2 rounded-full"
                    : "bg-primary-600 w-full h-2 rounded-full"
                }
              ></div>
            ))}
        </nav>
      </motion.div>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: easeIn(0.8) }}
        key={"main children"}
        className="px-10 h-full"
      >
        {children}
      </motion.main>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: easeIn(0.8) }}
        key={"footer"}
        className="bg-linear-to-br from-[#9162FE] to-[#4B30E4] py-6 px-5 text-white flex justify-between items-center text-lg"
      >
        <Button
          variant="light"
          className="text-white text-lg"
          startContent={<ChevronLeftIcon className="text-white size-5" />}
          onPress={() =>
            currentStep
              ? currentStep === 1
                ? router.push(
                    `/${router.query.shop_id}/${router.query.liff_id}/user`
                  )
                : onPressBack?.()
              : onPressNext?.()
          }
        >
          ย้อนกลับ
        </Button>

        {currentStep === 6 ? (
          <Button
            variant="solid"
            className="bg-white text-primary-700 text-lg disabled:opacity-70"
            onPress={onOpen}
            isDisabled={isDisabled}
            endContent={
              <ChevronDoubleRightIcon className="text-primary-700 size-5 animate-pulse" />
            }
          >
            ยืนยันคิว
          </Button>
        ) : (
          <Button
            variant="solid"
            className="bg-white text-primary-700 text-lg disabled:opacity-70"
            onPress={() => onPressNext?.()}
            isDisabled={isDisabled}
            endContent={
              <ChevronDoubleRightIcon className="text-primary-700 size-5 animate-pulse" />
            }
          >
            ขั้นถัดไป
          </Button>
        )}
      </motion.footer>

      <ModalConfirm
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        bookingDate={payload?.date}
        bookingTime={payload?.time}
      />
    </div>
  );
};

export default UserBookingLayout;
