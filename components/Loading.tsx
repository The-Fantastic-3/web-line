import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type LoadingProps = {
  isLoading?: boolean;
};

const Loading = ({ isLoading }: LoadingProps) => {
  return (
    <AnimatePresence initial={false}>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 h-screen w-full bg-white flex flex-col items-center justify-center z-50"
        >
          <div className="-translate-y-16 flex flex-col items-center">
            <Image
              src="/queuely-logo.svg"
              alt="Queuely Logo"
              width={180}
              height={180}
            />
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-semibold">Queuely</h1>
              <p className="text-neutral-400">ระบบจองคิวร้านค้าผ่าน LINE OA</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
