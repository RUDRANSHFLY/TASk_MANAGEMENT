import { deleteTask } from "@/statemanagment/taskReducer";
import { EllipsisVerticalIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { log } from "console";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import EditForm from "./EditForm";

interface Props {
  name: string;
  description: string;
  priority: string;
  assign: string;
  status: string;
  teamName: string;
  startTaskDate: string;
  endTaskDate: string;
}

const TaskView = ({
  name,
  description,
  priority,
  assign,
  status,
  teamName,
  startTaskDate,
  endTaskDate,
}: Props) => {
  const [showMoreOption, setshowMoreOption] = useState(false);
  const [showDeleteMenu, setshowDeleteMenu] = useState(false);
  const [showEditScreen, setshowEditScreen] = useState(false);
  const dispatch = useDispatch();

  const handleMoreShowOption = () => {
    setshowMoreOption(!showMoreOption);
  };

  const handleEditScreen = () => {
    handleMoreShowOption();
    setshowEditScreen(!showEditScreen);
  };

  const showDeleteOption = () => {
    if (status == "Completed") {
      alert("Cant Delete Completed Task");
    } else {
      setshowDeleteMenu(!showDeleteMenu);
    }
  };

  const deleteTaskView = (taskName: string) => {
    dispatch(deleteTask(taskName));
  };

  return (
    <div className="xl:my-5 bg-slate-400 h-auto w-full px-5 xl:w-64 xl:mx-auto ">
      <div
        className={`${
          showEditScreen ? "flex flex-col" : "hidden"
        } absolute bg-slate-950 w-screen h-screen  xl:w-[600px]  xl:h-[680px] top-0 left-0 text-white xl:op-10 xl:left-1/3  xl:mx-auto`}
      >
        <EditForm
          name={name}
          description={description}
          priority={priority}
          assign={assign}
          status={status}
          teamName={teamName}
          startTaskDate={startTaskDate}
          endTaskDate={endTaskDate}
          toggleEditMenu={handleEditScreen}
        />
      </div>
      <div
        className={`${
          showDeleteMenu ? "flex flex-col" : "hidden"
        } absolute bg-slate-950 top-0 left-0 right-0 mx-auto text-white xl:top-10 xl:left-0 xl:w-[600px]  xl:right-0 xl:mx-auto`}
      >
        <div className="flex flex-row justify-evenly gap-x-28 xl:gap-x-72 py-5 px-5 items-center border-b-2">
          <h1 className="text-2xl">Delete Task</h1>
          <XCircleIcon
            className="w-10 h-10 cursor-pointer shadow-2xl"
            onClick={showDeleteOption}
          />
        </div>
        <div className="flex justify-between px-10 py-5">
          <h1>{name}</h1>
          <div className="flex gap-x-5">
            <button
              onClick={showDeleteOption}
              className="py-3 px-3 bg-red-600 rounded-sm border-0 outline-0"
            >
              No
            </button>
            <button
              onClick={() => deleteTaskView(name)}
              className="py-3 px-3 bg-green-600 rounded-sm border-0 outline-0"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-5 py-2 border-b-2 items-center">
        <h1 className="text-black text-3xl">{name}</h1>
        <h1 className="text-white text-xl shadow-md px-2 py-2 bg-black">
          {priority}
        </h1>
      </div>
      <div className="py-5 px-2 flex flex-col gap-y-2">
        <p className="text-xl">{description}</p>
        <h2 className="inline cursor-pointer text-white text-xl px-2 py-2 tracking-wide text-center rounded-2xl bg-red-900">
          {teamName}
        </h2>
      </div>
      <div className="py-2 px-3 flex justify-between">
        <h2 className="text-2xl font-medium">{assign}</h2>
        <EllipsisVerticalIcon
          className="w-10 h-10 cursor-pointer"
          onClick={handleMoreShowOption}
        />
      </div>

      <div className="px-2 py-5 text-xl font-bold">
        <h1>Start Date : {startTaskDate}</h1>
        <h1>End Date : {endTaskDate}</h1>
      </div>

      <div className="px-12 pb-5">
        <button className=" bg-slate-950 text-white py-2 px-10 rounded-lg">
          {status}
        </button>
      </div>

      <div
        className={`${
          showMoreOption ? "flex" : "hidden"
        } sticky  bottom-80 left-0 right-0 flex-col gap-y-2`}
      >
        <button
          className="rounded-lg px-10 py-2 bg-black text-white"
          onClick={handleEditScreen}
        >
          Edit
        </button>
        <button
          className="rounded-lg px-10 py-2 bg-black text-white"
          onClick={() => {
            handleMoreShowOption();
            showDeleteOption();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskView;
