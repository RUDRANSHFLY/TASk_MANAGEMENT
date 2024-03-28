import React from "react";
import Card from "./Card";
type PropsData = {
  taskAssign: string;
  taskPriority: string;
  taskStartDate: string;
  taskEndDate: string;
  taskSortOrder: string;
};

const Data = (Props: PropsData) => {
  return (
    <div className="overflow-x-auto mt-3 flex gap-5 xl:overflow-hidden xl:flex xl:gap-x-5 xl:pt-5">
      <Card filterAndSortData={Props} name={"Pending"} color={"bg-gray-500"} />
      <Card
        filterAndSortData={Props}
        name={"InProgress"}
        color={"bg-yellow-600"}
      />
      <Card
        filterAndSortData={Props}
        name={"Completed"}
        color={"bg-green-500"}
      />
      <Card filterAndSortData={Props} name={"Deployed"} color={"bg-sky-800"} />
      <Card filterAndSortData={Props} name={"Deffered"} color={"bg-pink-950"} />
    </div>
  );
};

export default Data;
