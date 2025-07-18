import { useState } from "react";

const CalendarUser = () => {
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

  const [currentDate, setCurrentDate] = useState(new Date());
  const [month, setMonth] = useState(currentDate.getMonth());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  return (
    <>
      <h1>Calendar</h1>
    </>
  );
};

export default CalendarUser;
