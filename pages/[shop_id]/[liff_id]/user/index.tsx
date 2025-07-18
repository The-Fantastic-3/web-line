import UserDefaultLayout from "@/layouts/UserDefaultLayout";
import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  return (
    <UserDefaultLayout>
      <div className="flex flex-col justify-center gap-10 items-center h-full">
        <section className="text-center space-y-4">
          <h1 className="text-3xl text-neutral-800 font-semibold">
            ระบบจองคิว
          </h1>
          <article className="">
            <p className="text-neutral-500">
              fantastic3 คือระบบจองคิวและจัดการ ร้านค้าของคุณได้ง่ายๆ ผ่าน Line
              Official
            </p>
          </article>
        </section>
        <section className="bg-white w-full h-fit py-5 px-3 rounded-4xl border shadow-lg shadow-[#B8B8B8]/15 text-center text-neutral-600 space-y-5">
          <h1 className="underline text-2xl text-neutral-800 font-semibold">
            กฎการจองคิว
          </h1>
          <ul className="list-disc list-inside space-y-2">
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
  );
};

export default User;
