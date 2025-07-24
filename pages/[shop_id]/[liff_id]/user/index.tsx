import Loading from "@/components/Loading";
import UserDefaultLayout from "@/layouts/UserDefaultLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import liff from "@line/liff";

type Profile = {
  displayName?: string;
  userId?: string;
  pictureUrl?: string;
  statusMessage?: string;
};

const User = () => {
  const router = useRouter();
  const liff_id = router.query.liff_id;
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
    setTimeout(() => setLoading(false), 500);
  }, 2000);

  useEffect(() => {
    if (!router.isReady || typeof liff_id !== "string") return;
    const initLiff = async () => {
      try {
        await liff.init({ liffId: liff_id });
        if (!liff.isLoggedIn()) {
          liff.login();
        } else {
          const profile = await liff.getProfile();
          localStorage.setItem("lineProfile", JSON.stringify(profile));
        }
      } catch (err) {
        console.error("LIFF init error:", err);
        console.error("Please check your LIFF ID and ensure it is correct.");
      }
    };
    initLiff();
  }, [router.isReady, liff_id]);

  return (
    <>
      <Loading isLoading={loading} />
      <UserDefaultLayout>
        <div className="flex h-full flex-col items-center justify-center gap-10">
          <section className="space-y-4 text-center">
            <h1 className="text-3xl font-semibold text-neutral-800">
              ระบบจองคิว
            </h1>
            <article className="">
              <p className="text-neutral-400">
                fantastic3 คือระบบจองคิวและจัดการ ร้านค้าของคุณได้ง่ายๆ ผ่าน
                Line Official
              </p>
            </article>
          </section>
          <section className="h-fit w-full space-y-5 rounded-4xl border bg-white px-3 py-5 text-center text-neutral-500 shadow-lg shadow-[#B8B8B8]/15">
            <h1 className="text-2xl font-semibold text-neutral-800 underline">
              กฎการจองคิว
            </h1>
            <ul className="list-inside list-disc space-y-2">
              <li>เลือกวันและเวลาที่ว่างผ่านระบบจองคิว</li>
              <li>ใส่รายละเอียดงานสไตล์งานที่ต้องการ</li>
              <li>รอช่างยืนยันการจองภายใน 24 ชั่วโมง</li>
              <li>
                อาจจะมีการมัดจำในบางกรณีทางเราจะ
                ติดต่อไปทางไลน์ที่ใช้ในการจองคิวช่าง
              </li>
              <li>
                หากติดธุระด่วนหรือต้องการยกเลิก กรุณาทำล่วงหน้าอย่างน้อย 24 ชม.
              </li>
            </ul>
            <p className="">
              หากต้องการสอบถามเพิ่มเติม ติดต่อเราได้ทาง Line หรือ IG
            </p>
          </section>
        </div>
      </UserDefaultLayout>
    </>
  );
};

export default User;
