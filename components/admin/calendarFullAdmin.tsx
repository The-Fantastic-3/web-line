import { monthNamesTH } from "@/constant/monthNameTH";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/button";
import moment, { Moment } from "moment";
import { useEffect, useState } from "react";

const CalendarFullAdmin = (props: {
  onOpen: () => void;
  onSelected: (date: Moment | null) => void;
}) => {
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);
  const [currentDate, setCurrentDate] = useState(moment());

  const [monthLabel, setMonthLabel] = useState("");
  const [yearLabel, setYearLabel] = useState("");
  const [daysInMonth, setDaysInMonth] = useState(0);
  const [startOffset, setStartOffset] = useState(0);

  const weekdaysShort = moment.weekdaysShort();

  const updateCalendar = (date: Moment) => {
    const startOfMonth = moment(date).startOf("month");
    setCurrentDate(date);
    setMonthLabel(monthNamesTH[date.month()]);
    setYearLabel(date.year().toString());
    setDaysInMonth(date.daysInMonth());
    setStartOffset(startOfMonth.day());
  };

  const goToNextMonth = () => {
    const next = moment(currentDate).add(1, "month");
    updateCalendar(next);
  };

  const goToPreviousMonth = () => {
    const prev = moment(currentDate).subtract(1, "month");
    updateCalendar(prev);
  };

  // const handleDateSelect = (day: number) => {
  //   const clickedDate = moment(currentDate).date(day);
  //   if (clickedDate.isSameOrAfter(moment(), "day")) {
  //     setSelectedDate(clickedDate);
  //   }
  // };

  const activityMockup = [
    {
      id: 1,
      date: "26/07/2025",
      title: "ตัดผม",
      type: "jobs",
    },
    {
      id: 2,
      date: "26/07/2025",
      title: "ตัดผม",
      type: "jobs",
    },
    {
      id: 3,
      date: "26/07/2025",
      title: "ตัดผม",
      type: "jobs",
    },
    {
      id: 4,
      date: "28/07/2025",
      title: "ตัดผม",
      type: "jobs",
    },
    {
      id: 5,
      date: "28/07/2025",
      title: "ตัดผม",
      type: "jobs",
    },
    {
      id: 6,
      date: "28/07/2025",
      title: "ตัดผม",
      type: "jobs",
    },
    {
      id: 7,
      date: "29/07/2025",
      title: "กำหนดส่งโปรเจค",
      type: "other",
    },
    {
      id: 8,
      date: "30/07/2025",
      title: "กิจกรรมสร้างทีม",
      type: "other",
    },
    {
      id: 9,
      date: "01/08/2025",
      title: "กำหนดส่งโปรเจค",
      type: "other",
    },
    {
      id: 10,
      date: "03/08/2025",
      title: "กิจกรรมสร้างทีม",
      type: "jobs",
    },
  ];

  useEffect(() => {
    updateCalendar(currentDate);
  }, []);

  return (
    <div className="h-full">
      <div className="flex h-[calc(100vh-5rem)] w-full flex-col text-lg">
        {/* Header */}
        <div className="text-deeper-grey flex justify-between py-2">
          <Button onPress={goToPreviousMonth} variant="light" isIconOnly>
            <ChevronLeftIcon className="h-5 w-5" />
          </Button>
          <p className="my-auto">
            {monthLabel} {yearLabel}
          </p>
          <Button onPress={goToNextMonth} variant="light" isIconOnly>
            <ChevronRightIcon className="h-5 w-5" />
          </Button>
        </div>

        {/* Weekday headings */}
        <div className="grid grid-cols-7 justify-items-center border-b border-neutral-200 pb-2 text-center">
          {weekdaysShort.map((day) => (
            <p key={day} className="text-xs">
              {day}
            </p>
          ))}
        </div>

        {/* Calendar body */}
        <div className="grid h-full grid-cols-7 gap-y-1 px-2 pt-1 text-center">
          {/* Empty cells before the first day */}
          {Array.from({ length: startOffset }).map((_, i) => (
            <div key={`empty-start-${i}`} />
          ))}

          {/* Actual days of the month */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const thisDate = moment(currentDate).date(day);
            const isPast = thisDate.isBefore(moment(), "day");
            const isToday = thisDate.isSame(moment(), "day");
            const isSelected = selectedDate?.isSame(thisDate, "day");

            return (
              <div
                key={`day-${day}`}
                className={`flex min-h-[80px] w-full flex-col gap-y-1 ${isPast ? "opacity-50" : ""} ${isToday ? "text-primary-700" : ""} `}
                onClick={() => {
                  if (!isPast) {
                    props.onOpen();
                    props.onSelected(thisDate);
                  }
                }}
              >
                <p className="text-sm">{day}</p>
                {activityMockup.map((act, index) => {
                  const actDate = moment(act.date, "DD/MM/YYYY");
                  if (actDate.isSame(thisDate, "day")) {
                    return (
                      <div
                        className="w-full px-0.5"
                        key={`event-${day}-${index}`}
                      >
                        <div
                          className={`truncate rounded px-1 text-xs text-white ${act.type === "jobs" ? "bg-neutral-600" : "bg-blue-400"}`}
                        >
                          {act.title}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            );
          })}

          {/* Empty cells to complete the grid  */}
          {Array.from({
            length:
              Math.ceil((startOffset + daysInMonth) / 7) * 7 -
              (startOffset + daysInMonth),
          }).map((_, i) => (
            <div key={`empty-end-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarFullAdmin;
