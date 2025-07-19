import { Avatar } from "@heroui/avatar";
import { Checkbox } from "@heroui/checkbox";

type SelectProps = {
  onAgreed: (agreed: boolean) => void;
  agreed?: boolean;
  payload?: {
    date: string;
    time: string;
    lineName?: string;
    contactName: string;
    contactPhone: string;
  };
};

const ConfirmSelect = ({ onAgreed, agreed, payload }: SelectProps) => {
  return (
    <>
      <div className="border border-lighter-grey rounded-3xl p-6 w-full bg-white box-shadow flex flex-col items-center gap-4">
        <header>
          <h3 className="text-center font-semibold">สรุปข้อมูลการจอง</h3>
          <p className="text-light-grey text-center text-xs">
            เพื่อป้องกันความผิดพลาด กรุณาตรวจสอบข้อมูล
          </p>
        </header>
        <div className="flex flex-col items-center gap-2">
          <Avatar
            isBordered
            color="secondary"
            size="lg"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
          <p className="font-semibold">{payload?.lineName || "-"}</p>
        </div>
        <div className="w-full flex justify-between">
          <div className="flex flex-col">
            <p className="text-lighter-grey text-sm">วันที่จอง</p>
            <p>{payload?.date || "-"}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-lighter-grey text-sm">เวลา</p>
            <p>{payload?.time || "-"}</p>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <p className="text-lighter-grey text-sm">ผู้จอง/ติดต่อ</p>
          <p>{payload?.contactName || "-"}</p>
        </div>
        <div className="flex flex-col w-full">
          <p className="text-lighter-grey text-sm">เบอร์โทรติดต่อ</p>
          <p>{payload?.contactPhone || "-"}</p>
        </div>
      </div>
      <Checkbox color="secondary" isSelected={agreed} onValueChange={onAgreed}>
        ฉันได้ตรวจสอบข้อมูลเรียบร้อยแล้ว
      </Checkbox>
    </>
  );
};

export default ConfirmSelect;
