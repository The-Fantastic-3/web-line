import AdminLayout from "@/layouts/AdminLayout";
import { useRouter } from "next/router";

const Admin = () => {
  const router = useRouter();
  return (
    <AdminLayout>
      <h1>Admin Page</h1>
    </AdminLayout>
  );
};

export default Admin;
