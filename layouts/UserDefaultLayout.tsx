import { Head } from "./head";
import NavbarUser from "@/components/user/navbarUser";
import {
  CalendarDaysIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@heroui/button";
import * as motion from "motion/react-client";
import { useRouter } from "next/router";

const UserDefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <div className="relative flex h-screen flex-col">
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
        className="from-primary-100 h-full bg-linear-to-t from-10% via-white via-40% px-10"
      >
        {children}
      </motion.main>
      <motion.footer
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={"footer"}
        className="flex items-center justify-between bg-linear-to-br from-[#9162FE] to-[#4B30E4] px-5 py-6 text-lg text-white"
      >
        <Button
          variant="light"
          className="text-lg text-white"
          startContent={<CalendarDaysIcon className="size-5 text-white" />}
        >
          ดูคิวที่จองไว้
        </Button>

        <Button
          variant="solid"
          className="text-primary-700 bg-white text-lg"
          as={"a"}
          href={`/${router.query.shop_id}/${router.query.liff_id}/user/booking`}
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
