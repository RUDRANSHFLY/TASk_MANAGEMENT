import { taskArray, Task } from "@/model/Task";
import React, { useEffect, useState } from "react";
import TaskView from "./TaskView";
import { useSelector } from "react-redux";
import { selectTasks } from "@/statemanagment/taskReducer";

interface Props {
  name: string;
  color: string;
  filterAndSortData: {
    taskAssign: string;
    taskPriority: string;
    taskStartDate: string;
    taskEndDate: string;
    taskSortOrder: string;
  };
}

const Card = ({ name, color, filterAndSortData }: Props) => {
  const newtasks = useSelector(selectTasks);

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const sortedTasks = newtasks.filter((task) => {
      const statusMatches = task.status === name;

      const assignMatches =
        !filterAndSortData.taskAssign ||
        task.assign === filterAndSortData.taskAssign;

      const priorityMatches =
        !filterAndSortData.taskPriority ||
        filterAndSortData.taskPriority === "p" ||
        task.priority === filterAndSortData.taskPriority;

      const startDateMatches =
        !filterAndSortData.taskStartDate ||
        new Date(task.startDate) >= new Date(filterAndSortData.taskStartDate);

      const endDateMatches =
        !filterAndSortData.taskEndDate ||
        new Date(task.endDate) <= new Date(filterAndSortData.taskEndDate);

      return (
        statusMatches &&
        assignMatches &&
        priorityMatches &&
        startDateMatches &&
        endDateMatches
      );
    });

    const filteredAndSortedTaskData = sortedTasks.sort((a, b) => {
      if (filterAndSortData.taskSortOrder == "asc") {
        return a.priority.localeCompare(b.priority);
      } else if (filterAndSortData.taskSortOrder == "des") {
        return b.priority.localeCompare(a.priority);
      } else {
        return 0;
      }
    });

    setTasks(filteredAndSortedTaskData);
  }, [newtasks, name, filterAndSortData]);

  return (
    <div
      className={`w-screen h-[500px] shrink-0 xl:shrink xl:w-[400px] xl:h-[420px] rounded-2xl shadow-2xl overflow-scroll scrollbar-hide border-2 border-black`}
    >
      <div className={`h-12 ${color} text-center pt-2 pb-2`}>
        <h1 className="text-2xl text-white">{name}</h1>
      </div>
      <div className="overflow-scroll scrollbar-hide">
        {tasks?.map((task) => (
          <TaskView
            key={task.name}
            name={task.name}
            description={task.description}
            priority={task.priority}
            assign={task.assign}
            status={task.status}
            teamName={task.teamName}
            startTaskDate={task.startDate}
            endTaskDate={task.endDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
