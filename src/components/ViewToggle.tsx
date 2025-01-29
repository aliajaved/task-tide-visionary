import { Button } from "@/components/ui/button";
import { Calendar, ListTodo } from "lucide-react";

interface ViewToggleProps {
  view: "list" | "calendar";
  onViewChange: (view: "list" | "calendar") => void;
}

const ViewToggle = ({ view, onViewChange }: ViewToggleProps) => {
  return (
    <div className="flex space-x-2 mb-6">
      <Button
        variant={view === "list" ? "default" : "outline"}
        onClick={() => onViewChange("list")}
        className="flex items-center space-x-2"
      >
        <ListTodo className="w-4 h-4" />
        <span>List</span>
      </Button>
      <Button
        variant={view === "calendar" ? "default" : "outline"}
        onClick={() => onViewChange("calendar")}
        className="flex items-center space-x-2"
      >
        <Calendar className="w-4 h-4" />
        <span>Calendar</span>
      </Button>
    </div>
  );
};

export default ViewToggle;