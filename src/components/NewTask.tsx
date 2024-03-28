import { Task } from "@/model/Task";
import { getTodayDate } from "@/utility/helperFunctiones";
import { XCircleIcon } from "@heroicons/react/24/outline";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "@/statemanagment/taskReducer";

interface NewTaskProps {
  toggleAddTaskMenu: () => void;
}

const NewTask = ({ toggleAddTaskMenu }: NewTaskProps) => {
  const dispatch = useDispatch();
  const date = getTodayDate();
  const nameRef = useRef<HTMLInputElement>(null);
  const teamRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const assignRef = useRef<HTMLInputElement>(null);
  const priorityRef = useRef<HTMLSelectElement>(null);
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);

  const resetTaskData = () => {
    if (nameRef.current) nameRef.current.value = "";
    if (teamRef.current) teamRef.current.value = "";
    if (descRef.current) descRef.current.value = "";
    if (assignRef.current) assignRef.current.value = "";
    if (priorityRef.current) priorityRef.current.value = "Priority";
    if (startDateRef.current) startDateRef.current.value = "";
    if (endDateRef.current) endDateRef.current.value = "";
  };

  const addnewTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const nameValue = nameRef.current?.value || "";
    const descValue = descRef.current?.value || "";
    const assignValue = assignRef.current?.value || "";
    const teamValue = teamRef.current?.value || "";
    const priorityValue = priorityRef.current?.value || "";
    const startDateValue = startDateRef.current?.value || "";
    const endDateValue = endDateRef.current?.value || "";

    const newtask: Task = {
      name: nameValue,
      description: descValue,
      priority: priorityValue,
      assign: assignValue,
      status: "Pending",
      teamName: teamValue,
      startDate: startDateValue,
      endDate: endDateValue,
    };

    dispatch(addTask(newtask));

    toggleAddTaskMenu();

    resetTaskData();
  };

  return (
    <div className="px-2 py-2 xl:px-3 xl:py-2 text-white">
      <div className="flex flex-row justify-evenly xl:gap-x-72 py-3 px-5 items-center border-b-2">
        <h1 className="text-xl">CREATE A TASK</h1>
        <XCircleIcon
          className="w-8 h-8 cursor-pointer shadow-2xl"
          onClick={toggleAddTaskMenu}
        />
      </div>
      <div className="mt-3 xl:ml-5 flex flex-col gap-y-5">
        <div className="flex gap-x-5 xl:gap-x-28 items-center">
          <label htmlFor="title" className="text-xl hidden xl:block">
            Title:
          </label>
          <input
            placeholder="Enter Title"
            ref={nameRef}
            type="text"
            id="title"
            className="flex-grow py-2 px-5 bg-zinc-700 outline-0 border-0 rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex gap-x-5 xl:gap-x-12 text-wrap">
          <label htmlFor="title" className="text-xl hidden xl:block">
            Description:
          </label>
          <textarea
            placeholder="Enter Description"
            title="desc"
            ref={descRef}
            id="desc"
            className="h-32 text-wrap flex-grow py-2 px-5 bg-zinc-700 outline-0 border-0 rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex gap-x-14">
          <label
            className="text-xl hidden xl:block"
            htmlFor="
          "
          >
            Start Date:
          </label>
          <input
            ref={startDateRef}
            min={date}
            placeholder="Start Date"
            className=" bg-slate-600 xl:px-3 xl:py-2 px-5 py-2"
            type="date"
          />
        </div>
        <div className="flex gap-x-16">
          <label
            className="text-xl hidden xl:block"
            htmlFor="
          "
          >
            End Date:
          </label>
          <input
            ref={endDateRef}
            min={date}
            placeholder="Start Date"
            className=" bg-slate-600 px-5 py-2 xl:px-3 xl:py-2"
            type="date"
          />
        </div>
        <div className="flex gap-x-24 items-center">
          <label htmlFor="title" className="text-xl hidden xl:block">
            Team:
          </label>
          <input
            title="teamname"
            placeholder="Team Name"
            ref={teamRef}
            type="text"
            id="team"
            className="flex-grow py-2 px-5 bg-zinc-700 outline-0 border-0 rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex gap-x-12 items-center">
          <label htmlFor="title" className="text-xl hidden xl:block">
            Assignees:
          </label>
          <input
            placeholder="Assignee"
            title="assintask"
            ref={assignRef}
            type="text"
            id="assign"
            className="flex-grow py-2 px-5 bg-zinc-700 outline-0 border-0 rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex gap-x-20 items-center">
          <label htmlFor="title" className="text-xl hidden xl:block">
            Priority:
          </label>
          <select
            title="selecctpriority"
            ref={priorityRef}
            name="priority"
            id="priority"
            className="cursor-pointer py-2 outline-0 border-0 px-10 font-semibold rounded-md bg-zinc-700 text-white"
          >
            <option defaultValue={"select priority"} disabled>
              Priority
            </option>
            <option value="p0">p0</option>
            <option value="p1">p1</option>
            <option value="p2">p2</option>
          </select>
        </div>
        <div className="flex justify-evenly space-x-2 xl:gap-x-4 pb-5">
          <button
            className="py-3 px-10 xl:px-20 bg-red-500 text-black font-bold text-2xl"
            type="reset"
            onClick={resetTaskData}
          >
            Cancel
          </button>
          <button
            className="py-3 px-10 xl:px-20 bg-green-500 text-black font-bold text-2xl"
            type="submit"
            onClick={addnewTask}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
