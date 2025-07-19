import * as motion from "motion/react-client";

type SelectProps = {
  onAgeSelect: (age: string) => void;
  selectedAge?: string | null;
};

const mockedAgeRanges = [
  { id: "1", age: "5-12" },
  { id: "2", age: "13-18" },
  { id: "3", age: "19-24" },
  { id: "4", age: "25-34" },
  { id: "5", age: "35 ปีขึ้นไป" },
];

const AgeSelect = ({ onAgeSelect, selectedAge }: SelectProps) => {
  return (
    <div className="flex flex-col items-center w-full gap-5">
      {mockedAgeRanges.map((slot, index) => (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: index * 0.1 + 0.3 }}
          key={slot.id}
          className="w-full"
        >
          <input
            type="radio"
            id={`age-${slot.id}`}
            name="age"
            value={slot.age}
            className="hidden peer"
            onChange={() => onAgeSelect(slot.age)}
            checked={selectedAge === slot.age}
          />
          <label
            htmlFor={`age-${slot.id}`}
            className="w-full px-6 py-4 bg-white border border-primary-700 rounded-2xl box-shadow 
                       peer-checked:bg-primary-700 peer-checked:text-white transition duration-300 flex gap-4"
          >
            <p className="my-auto">{slot.age}</p>
          </label>
        </motion.div>
      ))}
    </div>
  );
};

export default AgeSelect;
