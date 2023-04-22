import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { GlobalContext } from "../../../context/GlobalContext";
import { useInput } from "../../../hooks/useInput";
import { useMultiform } from "../../../hooks/useMultiform";

import ProjectBasicInfo from "./ProjectBasicInfo";
import ProjectMoreInfo from "./ProjectMoreInfo";
import { useNavigate } from "react-router-dom";



type FormProject = {
  name: string;
  description: string;
  organization: string;
  status:  string;
  img: string;
  dueDate: string;
  label: string;
  id: string;
};

const newProjectInit: FormProject = {
  name: "",
  description: "",
  dueDate: "",
  label: "",
  status: "active",
  img:"",
  organization: "",
  id: uuidv4(),
};

const ProjectForm = () => {
  const { dispatchProjects, createProjectData } = useContext(GlobalContext);
  const [newProject, setNewProject] = useState(newProjectInit); 

  const navigate = useNavigate();

  const name = useInput("text");
  const description = useInput("text");
  const dueDate = useInput("date");

  const updateForm = (fields: Partial<FormProject>) => {
    setNewProject((prev) => ({ ...prev, ...fields }));
  };

  /*
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const project = {
      name: name.value,
      description: description.value,
      dueDate: dueDate.value,
      label: name.value.slice(0, 2),
      id: uuidv4(),
    };
    dispatchProjects({ type: "ADD_PROJECT", payload: project });
    createProjectData(project.id);
  };
  */
  const { step, next, prev, isFirstStep, isLastStep, stepCount } = useMultiform(
    [<ProjectBasicInfo {...newProject} updateForm={updateForm} />, <ProjectMoreInfo {...newProject} updateForm={updateForm} />, <h1>!</h1>]
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(isLastStep) {
      console.log(newProject);
      dispatchProjects({ type: "ADD_PROJECT", payload: newProject });
      createProjectData(newProject.id);
      navigate("/project/" + newProject.id);

    } else {
      next();
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        {step}
        {!isFirstStep && <div onClick={prev}>Before</div>}
        {!isLastStep ? <input type="submit" value="Next"/> : <input type="submit" value="finish"/>}
      </form>
      <div className="check">{stepCount + 1}</div>

    </div>
  );

  return (
    <div>
      <h1>Updated</h1>
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
          <input {...dueDate} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {step}
      <div className="check">{stepCount}</div>

      {!isFirstStep && <div onClick={prev}>Before</div>}
      {!isLastStep && <div onClick={next}>Next</div>}
    </div>
  );
};

export default ProjectForm;
