import CalendarFullAdmin from "@/components/admin/calendarFullAdmin";
import AdminLayout from "@/layouts/AdminLayout";
import { useRouter } from "next/router";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";
import Detail from "@/components/admin/home/detail";
import { useState } from "react";
import { Moment } from "moment";

const Admin = () => {
  const router = useRouter();
  const { onOpenChange, isOpen, onOpen } = useDisclosure();
  const [selected, setSelected] = useState<Moment | null>(null);

  const dataMockup = [
    {
      id: "1",
      name: "ไปกินข้าว",
      description: "ไปกินข้าวที่ร้านอาหาร",
      start_date: "2025-07-26T10:00:00Z",
      end_date: "2025-07-26T13:00:00Z",
      is_job: false,
      color: "bg-pink-500",
      user_line_uid: null,
      user_line_name: null,
      user_line_image: null,
      user_age_range: null,
      user_sex: null,
      note: null,
      status: null,
      price: null,
      shop_id: "shop-123",
      admin_id: "admin-456",
      admin_name: "Alex Johnson",
      created_at: "2025-07-01T10:00:00Z",
      created_by: "",
      updated_at: "2025-07-01T10:00:00Z",
    },
    {
      id: "2",
      name: "ทำสีผม",
      description: "ทำสีผมธรรมชาติ",
      start_date: "2025-07-26T11:00:00Z",
      end_date: null,
      is_job: true,
      color: null,
      user_line_uid: "421352",
      user_line_name: "Jane Doe",
      user_line_image: "https://example.com/image2.jpg",
      user_age_range: "18-24",
      user_sex: "female",
      note: "Please be on time.",
      status: "approved",
      price: null,
      shop_id: "shop-123",
      admin_id: "admin-456",
      admin_name: "Alex Johnson",
      created_at: "2025-07-01T10:00:00Z",
      created_by: "",
      updated_at: "2025-07-01T10:00:00Z",
    },
    {
      id: "3",
      name: "ทำสีผม",
      description: "ทำสีผมธรรมชาติ",
      start_date: "2025-07-26T12:00:00Z",
      end_date: null,
      is_job: true,
      color: null,
      user_line_uid: "421353",
      user_line_name: "Alice Smith",
      user_line_image: "https://example.com/image3.jpg",
      user_age_range: "35-44",
      user_sex: "female",
      note: "Please be on time.",
      status: "approved",
      price: null,
      shop_id: "shop-123",
      admin_id: "admin-456",
      admin_name: "Alex Johnson",
      created_at: "2025-07-01T10:00:00Z",
      created_by: "",
      updated_at: "2025-07-01T10:00:00Z",
    },
    {
      id: "4",
      name: "ถ่ายคลิป",
      description: "ถ่ายคลิปโปรโมท",
      start_date: "2025-07-26T13:00:00Z",
      end_date: "2025-07-26T15:00:00Z",
      is_job: false,
      color: "bg-blue-500",
      user_line_uid: null,
      user_line_name: null,
      user_line_image: null,
      user_age_range: null,
      user_sex: null,
      note: null,
      status: null,
      price: null,
      shop_id: "shop-123",
      admin_id: "admin-456",
      admin_name: "Alex Johnson",
      created_at: "2025-07-01T10:00:00Z",
      created_by: "admin-456",
      updated_at: "2025-07-01T10:00:00Z",
    },
  ];

  const slotTime = [
    {
      id: "1",
      time: "09:00",
      shop_id: "shop-123",
      created_at: "2025-07-01T10:00:00Z",
      updated_at: "2025-07-01T10:00:00Z",
    },
    {
      id: "2",
      time: "15:00",
      shop_id: "shop-123",
      created_at: "2025-07-01T10:00:00Z",
      updated_at: "2025-07-01T10:00:00Z",
    },
    {
      id: "3",
      time: "16:00",
      shop_id: "shop-123",
      created_at: "2025-07-01T10:00:00Z",
      updated_at: "2025-07-01T10:00:00Z",
    },
  ];

  return (
    <AdminLayout>
      <CalendarFullAdmin onOpen={onOpen} onSelected={setSelected} />
      <Button
        isIconOnly
        variant="shadow"
        className="absolute right-4 bottom-10 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-[#9162FE] to-[#4B30E4]"
      >
        <PlusIcon className="size-8 text-white" />
      </Button>
      <Detail
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        date={selected}
        bookingData={dataMockup}
      />
    </AdminLayout>
  );
};

export default Admin;
