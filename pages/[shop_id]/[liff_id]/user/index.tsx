import UserDefaultLayout from "@/layouts/UserDefaultLayout";
import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  return (
    <UserDefaultLayout>
      <p>User page</p>
      <p>{router.query.shop_id}</p>
      <p>{router.query.liff_id}</p>
    </UserDefaultLayout>
  );
};

export default User;
