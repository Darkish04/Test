import React from "react";

const Test = () => {
  return (
    <div className="flex bg-primary justify-between items-center p-6 m-6 rounded-xl">
      <span>Hello!</span>
      <div className="flex flex-row justify-between items-center gap-2">
        {" "}
        <span>Watashino sekaia</span>
        <span>Watashino sekaia</span>
        <span>Watashino sekaia</span>
      </div>
      <div className="">
        <a href="/pages/home">Home!</a>
      </div>
    </div>
  );
};

export default Test;
