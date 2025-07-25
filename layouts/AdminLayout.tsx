import NavbarAdmin from "@/components/admin/navbarAdmin";
import * as motion from "motion/react-client";
import { Head } from "./head";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-screen flex-col">
      <Head />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={"navbar"}
      >
        <NavbarAdmin notiCount={10} />
      </motion.div>
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        key={"main children"}
        className="from-primary-100 h-full"
      >
        {children}
      </motion.main>
    </div>
  );
};

export default AdminLayout;
