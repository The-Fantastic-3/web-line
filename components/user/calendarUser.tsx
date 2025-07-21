import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/button";
import moment from "moment";
import { use, useEffect, useState } from "react";

type SelectProps = {
  onSelectDate: (date: moment.Moment) => void;
  dateSelection?: moment.Moment | null;
};

const CalendarUser = ({ onSelectDate, dateSelection }: SelectProps) => {
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(
    moment() || dateSelection
  );
  const [currentDate, setCurrentDate] = useState(moment());
  const [month, setMonth] = useState(moment().format("MMMM"));
  const [year, setYear] = useState(moment().format("YYYY"));
  const [daysInMonth, setDaysInMonth] = useState(moment().daysInMonth());
  const [numberOfDayBefore, setNumberOfDayBefore] = useState(
    new Date(Number(year), moment().month(), 1).getDay()
  );
  const [lastdate, setLastDate] = useState(
    new Date(Number(year), moment().month() + 1, 0).getDate()
  );
  const [monthLastDate, setMonthLastDate] = useState(
    new Date(Number(year), moment().month(), 0).getDate()
  );

  const getMonthYear = () => {
    const date = new Date();
    setCurrentDate(moment());
    setMonth(mapMonth(currentDate.month()));
    setYear(currentDate.year().toString());
    setDaysInMonth(
      moment(`01/${date.getMonth() + 1}/${year}`, "DD/MM/YYYY").daysInMonth()
    );
    setNumberOfDayBefore(new Date(Number(year), date.getMonth(), 1).getDay());
    setLastDate(new Date(Number(year), date.getMonth() + 1, 0).getDate());
    setMonthLastDate(new Date(Number(year), date.getMonth(), 0).getDate());
  };

  const nextMonth = () => {
    const next = moment(currentDate).add(1, "month");
    setCurrentDate(next);
    setMonth(mapMonth(next.month()));
    setYear(next.year().toString());
    setDaysInMonth(next.daysInMonth());
    setNumberOfDayBefore(
      new Date(Number(next.year()), next.month(), 1).getDay()
    );
    setLastDate(new Date(Number(next.year()), next.month() + 1, 0).getDate());
    setMonthLastDate(new Date(Number(next.year()), next.month(), 0).getDate());
  };

  const previousMonth = () => {
    const previous = moment(currentDate).subtract(1, "month");
    setCurrentDate(previous);
    setMonth(mapMonth(previous.month()));
    setYear(previous.year().toString());
    setDaysInMonth(previous.daysInMonth());
    setNumberOfDayBefore(
      new Date(Number(previous.year()), previous.month(), 1).getDay()
    );
    setLastDate(
      new Date(Number(previous.year()), previous.month() + 1, 0).getDate()
    );
    setMonthLastDate(
      new Date(Number(previous.year()), previous.month(), 0).getDate()
    );
  };

  useEffect(() => {
    getMonthYear();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      onSelectDate(selectedDate);
    }
  }, [selectedDate]);

  const monthName = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

  const mapMonth = (monthIndex: number) => {
    return monthName[monthIndex];
  };

  let weekdayshortname = moment.weekdaysShort();
  return (
    <>
      <div className="w-full space-y-2 text-lg">
        {/* controller month */}
        <div className="flex justify-between text-deeper-grey">
          <Button onPress={previousMonth} variant="light" isIconOnly>
            <ChevronLeftIcon className="h-5 w-5" />
          </Button>
          <p className="my-auto">
            {month} {year}
          </p>
          <Button onPress={nextMonth} variant="light" isIconOnly>
            <ChevronRightIcon className="h-5 w-5" />
          </Button>
        </div>
        {/* head table */}
        <div className="grid grid-cols-7 justify-items-center text-center">
          {weekdayshortname.map((day) => {
            return (
              <p key={day} className="text-xs">
                {day}
              </p>
            );
          })}
        </div>
        {/* calendar body */}
        <div className="grid grid-cols-7 text-center pt-2">
          {/* before current month */}
          {Array.from({ length: numberOfDayBefore }, (_, i) => (
            <div
              key={i}
              className={`w-full focus:bg-zinc-300 h-12 flex flex-col items-center justify-center
                ${
                  moment().isSameOrBefore(
                    moment(currentDate).date(i + 1),
                    "day"
                  )
                    ? ""
                    : "text-neutral-400"
                }
                ${
                  selectedDate?.date() ===
                    monthLastDate - numberOfDayBefore + i + 1 &&
                  selectedDate?.month() === currentDate.month() - 1
                    ? "bg-blue-100 rounded-2xl"
                    : ""
                }
                `}
              onClick={() => {
                if (
                  moment().isSameOrBefore(
                    moment(currentDate).date(i + 1),
                    "day"
                  )
                ) {
                  setSelectedDate(
                    moment(currentDate)
                      .subtract(1, "month")
                      .date(monthLastDate - numberOfDayBefore + i + 1)
                  );
                }
              }}
            >
              <div
                className={`${
                  moment().isSameOrBefore(
                    moment(currentDate).date(i + 1),
                    "day"
                  )
                    ? "w-1.5 h-1.5 rounded-full bg-[#44D3FF]"
                    : ""
                }`}
              ></div>
              {monthLastDate - numberOfDayBefore + i + 1}
            </div>
          ))}
          {/* current month */}
          {Array.from({ length: daysInMonth }, (_, i) => (
            <div
              key={i}
              className={`relative w-full focus:bg-zinc-300 h-12 flex flex-col items-center justify-center
                ${
                  moment().isSameOrBefore(
                    moment(currentDate).date(i + 1),
                    "day"
                  )
                    ? ""
                    : "text-neutral-400"
                }
                ${selectedDate?.date() === i + 1 && selectedDate?.month() === currentDate.month() ? "bg-blue-100 rounded-2xl" : ""}
                ${moment().date() === i + 1 && moment().month() === currentDate.month() ? "text-primary-700" : ""}
                `}
              onClick={() => {
                if (
                  moment().isSameOrBefore(
                    moment(currentDate).date(i + 1),
                    "day"
                  )
                ) {
                  setSelectedDate(moment(currentDate).date(i + 1));
                }
              }}
            >
              <div
                className={`${
                  moment().isSameOrBefore(
                    moment(currentDate).date(i + 1),
                    "day"
                  )
                    ? "w-1.5 h-1.5 rounded-full bg-[#44D3FF]"
                    : ""
                }`}
              ></div>
              {i + 1}
            </div>
          ))}
          {/* after current month */}
          {Array.from({ length: 10 }, (_, i) => {
            if (
              Math.ceil((numberOfDayBefore + lastdate) / 7) * 7 -
                (numberOfDayBefore + lastdate) >
              i
            ) {
              return (
                <div
                  key={i}
                  className={`w-full focus:bg-zinc-300 h-12 flex flex-col items-center justify-center
                    ${
                      moment().isSameOrBefore(
                        moment(currentDate)
                          .date(i + 1)
                          .month(currentDate.month() + 1),
                        "day"
                      )
                        ? ""
                        : "text-neutral-400"
                    }
                    ${
                      selectedDate?.date() === i + 1 &&
                      selectedDate?.month() === currentDate.month() + 1
                        ? "bg-blue-100 rounded-2xl"
                        : ""
                    }
                `}
                  onClick={() => {
                    if (
                      moment().isSameOrBefore(
                        moment(currentDate)
                          .date(i + 1)
                          .month(currentDate.month() + 1),
                        "day"
                      )
                    ) {
                      setSelectedDate(
                        moment(currentDate)
                          .add(1, "month")
                          .date(i + 1)
                      );
                    }
                  }}
                >
                  <div
                    className={`${
                      moment().isSameOrBefore(
                        moment(currentDate)
                          .date(i + 1)
                          .month(currentDate.month() + 1),
                        "day"
                      )
                        ? "w-1.5 h-1.5 rounded-full bg-[#44D3FF]"
                        : ""
                    }`}
                  ></div>
                  {i + 1}
                </div>
              );
            }
          })}
        </div>

        {/* note */}
        <div className="flex justify-evenly w-full pt-5">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FF4444] my-auto"></div>
            <p className="text-sm">คิวเต็ม</p>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FFB135] my-auto"></div>
            <p className="text-sm">คิวใกล้เต็ม</p>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#44D3FF] my-auto"></div>
            <p className="text-sm">คิวว่าง</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarUser;
