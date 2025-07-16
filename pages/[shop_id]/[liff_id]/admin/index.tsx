import { useRouter } from "next/router";

const Admin = () => {
  const router = useRouter();
  return (
    <>
      <p>Admin page</p>
      <p>{router.query.shop_id}</p>
      <p>{router.query.liff_id}</p>
    </>
  );
};

export default Admin;
