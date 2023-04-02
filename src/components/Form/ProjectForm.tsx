import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { GlobalContext } from "../../context/GlobalContext";
import { useInput } from "../../hooks/useInput";

const ProjectForm = () => {
    const { projects, dispatchProjects } = useContext(GlobalContext);

  const name = useInput("text");
  const description = useInput("text");
  const dueDate = useInput("date");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const project = {
            name: name.value,
            description: description.value,
            dueDate: dueDate.value,
            id: uuidv4()
        }
        dispatchProjects({type: "ADD_PROJECT", payload: project});

    };

  return (
    <div>
      <h1>Project Form</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input {...name} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input {...description} name="description" id="description" />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input {...dueDate}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProjectForm;
