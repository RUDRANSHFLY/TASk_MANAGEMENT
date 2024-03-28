import React, { useState } from "react";
import NewTask from "./NewTask";
import Data from "./Data";
import {
  AdjustmentsHorizontalIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";

const Form = () => {
  const [assign, setassign] = useState("");
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [priority, setpriority] = useState("");
  const [showAddtaskMenu, setshowAddtaskMenu] = useState(false);
  const [sort, setSort] = useState("");
  const [showFilterandSort, setshowFilterandSort] = useState(false);

  const toggleAddTaskMenu = () => {
    setshowAddtaskMenu(!showAddtaskMenu);
  };

  return (
    <div className="pt-5 px-3 ">
      <div className="flex flex-col xl:flex-row xl:gap-x-11 xl:items-center xl:mb-3">
        <div
          className="flex text-center justify-between items-center rounded-lg text-2xl text-bold  xl:hidden bg-black text-white py-2 px-5 border-b-2 shadow-2xl mb-2"
          onClick={() => setshowFilterandSort(!showFilterandSort)}
        >
          <h1>Filter</h1>
          <FunnelIcon className="h-6 w-6" />
          <h1>&</h1>
          <h1>Sort</h1>
          <AdjustmentsHorizontalIcon className="h-6 w-6" />
        </div>
        <div
          className={`${
            showFilterandSort ? "flex absolute px-5 py-5" : "hidden"
          } bg-gray-700 w-screen h-screen top-0 left-0 xl:bg-transparent xl:w-full  xl:h-full xl:flex flex-col gap-y-5 xl:flex-row xl:gap-x-5`}
        >
          <h1 className="text-white xl:text-black xl:block text-3xl font-bold">
            Filter By :
          </h1>
          <input
            type="text"
            placeholder="Assignee Name"
            className="py-2 outline-0 border-0 pl-2 pr-5 font-semibold rounded-md bg-slate-950 text-white"
            value={assign}
            onChange={(e) => setassign(e.target.value)}
          />
          <select
            title="pp2"
            name="priority2"
            id="priority222"
            className="cursor-pointer py-2 outline-0 border-0 px-10 font-semibold rounded-md bg-slate-950 text-white"
            value={priority}
            onChange={(e) => setpriority(e.target.value)}
          >
            <option value={"p"}>Priority</option>
            <option value="p0">p0</option>
            <option value="p1">p1</option>
            <option value="p2">p2</option>
          </select>
          <input
            title="start Date"
            type="date"
            id="starttaskDate"
            name="starttaskdate"
            className="cursor-pointer outline-0 border-0 py-2 px-10 font-semibold rounded-md bg-gray-500 text-white"
            value={startDate}
            onChange={(e) => setstartDate(e.target.value)}
          />
          <input
            title="date"
            type="date"
            id="endtaskDate"
            name="endtaskdate"
            className="cursor-pointer outline-0 border-0 py-2 px-10 font-semibold rounded-md bg-gray-500 text-white"
            value={endDate}
            onChange={(e) => setendDate(e.target.value)}
          />
          <div className="flex flex-col space-y-5 xl:hidden xl:gap-x-11 xl:items-center">
            <h1 className="text-3xl font-bold text-white">Sort By :</h1>
            <select
              title="prioroty"
              name="priority"
              id="priority2"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="cursor-pointer py-2 outline-0 border-0 px-10 font-semibold rounded-md bg-slate-950 text-white"
            >
              <option disabled defaultChecked>
                Priority
              </option>
              <option value="d">default</option>
              <option value="asc">p0-p1-p2</option>
              <option value="des">p2-p1-p0</option>
            </select>
          </div>
          <button
            onClick={() => setshowFilterandSort(!showFilterandSort)}
            className=" bg-teal-700 rounded-2xl shadow-2xl xl:hidden   text-white text-2xl px-5 py-5"
          >
            Submit
          </button>
        </div>
        <button
          type="submit"
          onClick={toggleAddTaskMenu}
          className="py-2 border-0 outline-0 rounded-md px-14 bg-slate-950 text-white hover:shadow-lg"
        >
          Add New Task
        </button>
      </div>
      <div className="hidden xl:flex xl:gap-x-11 xl:items-center">
        <h1 className="text-3xl font-bold">Sort By:</h1>
        <select
          title="prioroty"
          name="priority"
          id="priority"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="cursor-pointer py-2 outline-0 border-0 px-10 font-semibold rounded-md bg-slate-950 text-white"
        >
          <option disabled defaultChecked>
            Priority
          </option>
          <option value="d">default</option>
          <option value="asc">p0-p1-p2</option>
          <option value="des">p2-p1-p0</option>
        </select>
      </div>
      <div
        className={`${
          showAddtaskMenu ? "inline-flex justify-center" : "hidden"
        } absolute  xl:w-[600px]  h-[680px] bg-slate-950 top-0 xl:top-5 right-0 left-0 mx-auto `}
      >
        <NewTask toggleAddTaskMenu={toggleAddTaskMenu} />
      </div>
      <div>
        <Data
          taskAssign={assign}
          taskPriority={priority}
          taskStartDate={startDate}
          taskEndDate={endDate}
          taskSortOrder={sort}
        />
      </div>
    </div>
  );
};

export default Form;
