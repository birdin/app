import { AiFillCheckCircle } from "react-icons/ai";

const FinishComponent = () => {
  return (
    <div className="finish-form-component show-appear">
      <div>
        <AiFillCheckCircle />
      </div>
      <div>
        <h1>Almost done!</h1>
      </div>
      <p>Your new project has been set up</p>
      <p>To continue, just press <b>'+ Create project'</b>.</p>
    </div>
  );
};

export default FinishComponent;
