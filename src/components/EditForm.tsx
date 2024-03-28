import { editTask } from "@/statemanagment/taskReducer";
import { XCircleIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

interface Props {
  name: string;
  description: string;
  priority: string;
  assign: string;
  status: string;
  teamName: string;
  startTaskDate: string;
  endTaskDate: string;
  toggleEditMenu: () => void;
}

const EditForm = ({
  name,
  description,
  priority,
  assign,
  status,
  teamName,
  startTaskDate,
  endTaskDate,
  toggleEditMenu,
}: Props) => {
  const [taskStatus, settaskStatus] = useState(status);
  const [taskPriority, settaskPriority] = useState(priority);
  const dispatch = useDispatch();

  const handleEditChanges = () => {
    dispatch(
      editTask({
        taskName: name,
        taskPriority: taskPriority,
        taskStatus: taskStatus,
      })
    );
    toggleEditMenu();
  };

  return (
    <div>
      <div className="px-3 py-2 text-white">
        <div className="flex flex-row justify-evenly xl:gap-x-72 py-3 px-5 items-center border-b-2">
          <h1 className="text-xl">EDIT A TASK</h1>
          <XCircleIcon
            className="w-8 h-8 cursor-pointer shadow-2xl"
            onClick={toggleEditMenu}
          />
        </div>
        <div className="mt-3 ml-5 flex flex-col gap-y-5">
          <div className="flex gap-x-28 items-center">
            <label htmlFor="title" className="text-xl hidden xl:block">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={name}
              disabled
              className="flex-grow py-2 px-5 bg-zinc-700 outline-0 border-0 rounded-lg shadow-2xl cursor-not-allowed"
            />
          </div>
          <div className="flex gap-x-12 text-wrap">
            <label htmlFor="title" className="text-xl hidden xl:block">
              Description:
            </label>
            <textarea
              title="desc"
              id="desc"
              value={description}
              disabled
              className="h-32 text-wrap flex-grow py-2 px-5 bg-zinc-700 outline-0 border-0 rounded-lg shadow-2xl cursor-not-allowed"
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
              disabled
              placeholder="Start Date"
              className=" bg-slate-600 xl:px-3 px-5 py-2 cursor-not-allowed"
              type="date"
              value={startTaskDate}
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
              placeholder="End Date"
              className=" bg-slate-600 xl:px-3 px-5 py-2 cursor-not-allowed"
              type="date"
              disabled
              value={endTaskDate}
            />
          </div>
          <div className="flex gap-x-24 items-center">
            <label htmlFor="title" className="text-xlb hidden xl:block">
              Team:
            </label>
            <input
              disabled
              value={teamName}
              title="teamname"
              type="text"
              id="team"
              className="flex-grow py-2 px-5 bg-zinc-700 outline-0 border-0 rounded-lg shadow-2xl cursor-not-allowed"
            />
          </div>
          <div className="flex gap-x-12 items-center">
            <label htmlFor="title" className="text-xl hidden xl:block">
              Assignees:
            </label>
            <input
              disabled
              value={assign}
              title="assintask"
              type="text"
              id="assign"
              className="flex-grow py-2 px-5 bg-zinc-700 outline-0 border-0 rounded-lg shadow-2xl cursor-not-allowed"
            />
          </div>
          <div className="flex gap-x-10 items-center">
            <label htmlFor="title" className="text-xl hidden xl:block">
              Priority:
            </label>
            <select
              title="selecctpriority"
              name="priority"
              id="priority"
              value={taskPriority}
              onChange={(e) => settaskPriority(e.target.value)}
              className="cursor-pointer py-2 outline-0 border-0 px-10 font-semibold rounded-md bg-zinc-700 text-white"
            >
              <option value="p0">p0</option>
              <option value="p1">p1</option>
              <option value="p2">p2</option>
            </select>
            <label htmlFor="" className="text-xl hidden xl:block">
              Status:
            </label>
            <select
              title="selectsataus"
              name="ss"
              id="ss"
              value={taskStatus}
              onChange={(e) => settaskStatus(e.target.value)}
              className="cursor-pointer py-2 outline-0 border-0 px-10 font-semibold rounded-md bg-zinc-700 text-white"
            >
              <option value="Pending">Pending</option>
              <option value="InProgress">InProgress</option>
              <option value="Completed">Completed</option>
              <option value="Deployed">Deployed</option>
              <option value="Deffered">Deffered</option>
            </select>
          </div>
          <div className="flex justify-evenly gap-x-4 pb-5">
            <button
              className="py-3 px-10 xl:px-20 bg-red-500 text-black font-bold text-2xl"
              type="reset"
            >
              Cancel
            </button>
            <button
              className="py-3 px-10 xl:px-20 bg-green-500 text-black font-bold text-2xl"
              type="submit"
              onClick={handleEditChanges}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
