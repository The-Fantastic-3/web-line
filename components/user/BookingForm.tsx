import { FormSlot } from "@/types/user/formSlot";
import { Input } from "@heroui/input";

type SelectProps = {
  onFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  form?: FormSlot;
};

const BookingForm = ({ form, onFormChange }: SelectProps) => {
  return (
    <div className="flex flex-col items-center w-full gap-6">
      <Input
        isRequired
        errorMessage="กรุณากรอกชื่อผู้ติดต่อ"
        label="ชื่อผู้ติดต่อ"
        placeholder="โปรดระบุชื่อผู้จอง"
        labelPlacement="outside"
        size="lg"
        name="contactName"
        type="text"
        value={form?.contactName}
        onChange={onFormChange}
      />
      <Input
        isRequired
        errorMessage="กรุณากรอกเบอร์โทรติดต่อ"
        label="เบอร์โทรติดต่อ"
        placeholder="โปรดระบุเบอร์โทรศัพท์ที่สามารถติดต่อได้"
        labelPlacement="outside"
        size="lg"
        name="contactPhone"
        type="number"
        value={form?.contactPhone}
        onChange={onFormChange}
      />
      <Input
        label="ช่องทางการติดต่อเพิ่มเติม"
        placeholder="โปรดระบุช่องทางการติดต่อเพิ่มเติม"
        labelPlacement="outside"
        size="lg"
        name="additionalContact"
        type="text"
        value={form?.additionalContact}
        onChange={onFormChange}
      />
      <Input
        label="หมายเหตุถึงช่าง"
        placeholder="โปรดระบุหมายเหตุถึงช่าง"
        labelPlacement="outside"
        size="lg"
        name="notesToArtist"
        type="text"
        value={form?.notesToArtist}
        onChange={onFormChange}
      />
    </div>
  );
};

export default BookingForm;
