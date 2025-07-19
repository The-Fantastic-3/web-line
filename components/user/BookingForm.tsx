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
        type="tel"
        value={form?.contactPhone}
        onChange={onFormChange}
        pattern="^\d{3}-\d{3}-\d{4}$"
        onInput={(e) => {
          const input = e.target as HTMLInputElement;
          let digits = input.value.replace(/\D/g, "").slice(0, 10);
          let formatted = digits;
          if (digits.length > 6) {
            formatted = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
          } else if (digits.length > 3) {
            formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`;
          }
          input.value = formatted;
        }}
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
