import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const CalendarView = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card className="p-4 animate-fade-in">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </Card>
  );
};

export default CalendarView;