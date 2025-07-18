import { TimeSlot } from "@/types/user/timeSlot";

type SelectProps = {
  timeSlots: TimeSlot[];
  onTimeSelect: (time: string) => void;
  selectedTime?: string | null;
};

const TimeSelect = ({ timeSlots, onTimeSelect, selectedTime }: SelectProps) => {
  return (
    <div className="flex flex-col items-center w-full gap-5">
      {timeSlots.map((slot) => (
        <div key={slot.time} className="w-full">
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
        </div>
      ))}
    </div>
  );
};

export default TimeSelect;
