import CalendarFullAdmin from "@/components/admin/calendarFullAdmin";
import AdminLayout from "@/layouts/AdminLayout";
import { useRouter } from "next/router";
import { PlusIcon } from "@heroicons/react/24/outline";

const Admin = () => {
  const router = useRouter();
  return (
    <AdminLayout>
      <CalendarFullAdmin />
      <div className="absolute right-4 bottom-10 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-[#9162FE] to-[#4B30E4]">
        <PlusIcon className="size-8 text-white" />
      </div>
    </AdminLayout>
  );
};

export default Admin;
