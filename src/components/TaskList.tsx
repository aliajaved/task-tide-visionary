import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Flag, ListTodo } from "lucide-react";

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: "high" | "medium" | "low";
  category: "blue" | "orange" | "purple" | "pink";
}

const mockTasks: Task[] = [
  {
    id: 1,
    title: "Complete project proposal",
    description: "Write and submit the Q2 project proposal",
    dueDate: "2024-04-15",
    priority: "high",
    category: "blue",
  },
  {
    id: 2,
    title: "Team meeting",
    description: "Weekly sync with the development team",
    dueDate: "2024-04-10",
    priority: "medium",
    category: "orange",
  },
  {
    id: 3,
    title: "Update documentation",
    description: "Review and update API documentation",
    dueDate: "2024-04-20",
    priority: "low",
    category: "purple",
  },
];

const TaskList = () => {
  return (
    <div className="space-y-4 animate-fade-in">
      {mockTasks.map((task) => (
        <Card key={task.id} className="p-4 hover:shadow-lg transition-shadow">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-lg">{task.title}</h3>
                <Badge
                  className={`bg-priority-${task.priority}`}
                  variant="secondary"
                >
                  {task.priority}
                </Badge>
                <Badge
                  className={`bg-category-${task.category} text-white`}
                  variant="secondary"
                >
                  {task.category}
                </Badge>
              </div>
              <p className="text-gray-600">{task.description}</p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{task.dueDate}</span>
              </div>
            </div>
            <Flag
              className={`w-5 h-5 text-priority-${task.priority}`}
              aria-label={`Priority: ${task.priority}`}
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;