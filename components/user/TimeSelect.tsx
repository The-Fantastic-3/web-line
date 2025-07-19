import * as motion from "motion/react-client";
import { TimeSlot } from "@/types/user/timeSlot";

type SelectProps = {
  timeSlots: TimeSlot[];
  onTimeSelect: (time: string) => void;
  selectedTime?: string | null;
};

const TimeSelect = ({ timeSlots, onTimeSelect, selectedTime }: SelectProps) => {
  return (
    <div
      className={
        timeSlots.length <= 5
          ? "flex flex-col items-center w-full gap-5"
          : "grid grid-cols-2 gap-4 items-center w-full"
      }
    >
      {timeSlots.map((slot, index) => (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: index * 0.1 + 0.3 }}
          key={slot.time}
          className="w-full"
        >
          <input
            type="radio"
            id={`time-${slot.time}`}
            name="age"
            value={slot.time}
            className="hidden peer"
            onChange={() => onTimeSelect(slot.time)}
            checked={selectedTime === slot.time}
          />
          <label
            htmlFor={`time-${slot.time}`}
            className="w-full inline-block px-6 py-4 bg-white border border-primary-700 rounded-2xl box-shadow 
                       peer-checked:bg-primary-700 peer-checked:text-white transition duration-300"
          >
            {slot.time}
          </label>
        </motion.div>
      ))}
    </div>
  );
};

export default TimeSelect;
