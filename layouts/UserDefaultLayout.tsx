import { Head } from "./head";
import NavbarUser from "@/components/user/navbarUser";
import {
  CalendarDaysIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@heroui/button";
import * as motion from "motion/react-client";

const UserDefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={"navbar"}
      >
        <NavbarUser />
      </motion.div>
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        key={"main children"}
        className="px-6 h-full"
      >
        {children}
      </motion.main>
      <motion.footer
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={"footer"}
        className="bg-linear-to-br from-[#00B4DB] to-[#0083B0] py-6 px-5 text-white flex justify-between items-center text-lg"
      >
        <div className="flex gap-3">
          <CalendarDaysIcon className="size-7" />
          <p className="my-auto">ดูคิวที่จองไว้</p>
        </div>
        <Button
          variant="solid"
          className="bg-white text-primary-700 text-lg"
          endContent={
            <ChevronDoubleRightIcon className="text-primary-700 size-5" />
          }
        >
          จองคิวสัก
        </Button>
      </motion.footer>
    </div>
  );
};

export default UserDefaultLayout;
