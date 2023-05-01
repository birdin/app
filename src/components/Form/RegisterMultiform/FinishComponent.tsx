import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const FinishComponent = () => {
  return (
    <>
      <div className="d-flex">
        <AiFillCheckCircle />
        <h1>Almost done!</h1>
      </div>
      <p>The project has been set up</p>
    </>
  );
};

export default FinishComponent;
