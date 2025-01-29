import { useState } from "react";
import TaskList from "@/components/TaskList";
import CalendarView from "@/components/CalendarView";
import ViewToggle from "@/components/ViewToggle";

const Index = () => {
  const [view, setView] = useState<"list" | "calendar">("list");

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-primary">Task Manager</h1>
        <ViewToggle view={view} onViewChange={setView} />
        {view === "list" ? <TaskList /> : <CalendarView />}
      </div>
    </div>
  );
};

export default Index;