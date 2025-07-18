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

// Define props type for children
type UserBookingLayoutProps = {
  children: React.ReactNode;
  stepCount?: number;
  currentStep?: number | 1;
  onPressBack?: () => void;
  onPressNext?: () => void;
};

const UserBookingLayout = ({
  children,
  stepCount,
  currentStep,
  onPressBack,
  onPressNext,
}: UserBookingLayoutProps) => {
  const router = useRouter();

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
        className="bg-linear-to-br from-[#00B4DB] to-[#0083B0] py-6 px-5 text-white flex justify-between items-center text-lg"
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

        <Button
          variant="solid"
          className="bg-white text-primary-700 text-lg"
          onPress={() => onPressNext?.()}
          endContent={
            <ChevronDoubleRightIcon className="text-primary-700 size-5" />
          }
        >
          ขั้นถัดไป
        </Button>
      </motion.footer>
    </div>
  );
};

export default UserBookingLayout;
