import { FemaleIcon, MaleIcon, NonBinaryIcon } from "../icon";
import { XMarkIcon } from "@heroicons/react/24/outline";
import * as motion from "motion/react-client";

type SelectProps = {
  onGenderSelect: (gender: string) => void;
  selectedGender?: string | null;
};

const mockedGender = [
  {
    id: "1",
    gender: "ชาย",
    icon: () => <MaleIcon size={16} className="my-auto" />,
  },
  {
    id: "2",
    gender: "หญิง",
    icon: () => <FemaleIcon size={18} className="my-auto" />,
  },
  {
    id: "3",
    gender: "ไม่ระบุเพศ",
    icon: () => <NonBinaryIcon size={18} className="my-auto" />,
  },
  {
    id: "4",
    gender: "อื่นๆ",
    icon: () => <XMarkIcon className="size-5 my-auto" />,
  },
];

const GenderSelect = ({ onGenderSelect, selectedGender }: SelectProps) => {
  return (
    <div className="flex flex-col items-center w-full gap-5">
      {mockedGender.map((slot, index) => (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: index * 0.1 + 0.3 }}
          key={slot.id}
          className="w-full"
        >
          <input
            type="radio"
            id={`gender-${slot.id}`}
            name="gender"
            value={slot.gender}
            className="hidden peer"
            onChange={() => onGenderSelect(slot.gender)}
            checked={selectedGender === slot.gender}
          />
          <label
            htmlFor={`gender-${slot.id}`}
            className="w-full px-6 py-4 bg-white border border-primary-700 rounded-2xl box-shadow 
                       peer-checked:bg-primary-700 peer-checked:text-white transition duration-300 flex gap-4"
          >
            <div className="my-auto">{slot.icon()}</div>
            <p className="my-auto">{slot.gender}</p>
          </label>
        </motion.div>
      ))}
    </div>
  );
};

export default GenderSelect;
