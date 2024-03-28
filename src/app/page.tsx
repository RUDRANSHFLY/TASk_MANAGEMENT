"use client";
import Form from "@/components/Form";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Provider } from "react-redux";
import { store } from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen xl:px-5  bg-[url(https://img.freepik.com/premium-vector/white-background-gradient-abstract-design-modern_343694-3049.jpg)] bg-cover">
        <div
          id="navbar"
          className="flex justify-evenly items-center py-1 xl:flex xl:justify-between xl:items-center xl:shadow-lg xl:py-5 xl:px-2"
        >
          <h1 className="text-md text-bold xl:text-3xl xl:tracking-wide xl:font-semibold">
            Task Board
          </h1>
          <UserCircleIcon className="h-5 w-5 xl:h-10 xl:w-10" />
        </div>
        <Form />
      </div>
    </Provider>
  );
}
