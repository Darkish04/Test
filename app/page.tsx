import React from "react";
import Test from "./comp/Test";

const page = () => {
  return (
    <div>
      <div className="flex w-full justify-between items-center">
        {" "}
        <span></span>
        <h1 className=" bg-orange-400 border-4 border-white-400 m-3 p-2 rounded-xl">
          Athish
        </h1>
        <span></span>
      </div>

      <Test />
    </div>
  );
};

export default page;
