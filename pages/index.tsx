import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

export default function IndexPage() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <DefaultLayout>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-4 right-4 z-50"
      >
        Toggle
      </button>
      <AnimatePresence>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            className="flex flex-col justify-center items-center h-full -translate-y-20"
            key={"container"}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              exit={{ opacity: 0 }}
              key={"logo"}
            >
              <Image
                src="/Queuely-logo.svg"
                width={200}
                height={200}
                alt="Fantastic 3 Logo"
              />
            </motion.div>
            <div className="text-center">
              <h1 className={title({ size: "sm" })}>Queuely</h1>
              <p className="text-light-grey pt-2">
                ระบบจองคิวร้านค้าผ่าน LINE OA
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </DefaultLayout>
  );
}
