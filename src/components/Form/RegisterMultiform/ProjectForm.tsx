import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import { GlobalContext } from "../../../context/GlobalContext";
import { useMultiform } from "../../../hooks/useMultiform";

import ProjectBasicInfo from "./ProjectBasicInfo";
import ProjectMoreInfo from "./ProjectMoreInfo";
import FormProjectHeader from "../../Header/FormProjectHeader";
import { AiFillCheckCircle } from "react-icons/ai";

type FormProject = {
  name: string;
  description: string;
  organization: string;
  status: string;
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
  img: "",
  organization: "",
  id: uuidv4(),
};

const ProjectForm = () => {
  const { dispatchProjects, createProjectData } = useContext(GlobalContext);
  const [newProject, setNewProject] = useState(newProjectInit);

  const navigate = useNavigate();

  const updateForm = (fields: Partial<FormProject>) => {
    setNewProject((prev) => ({ ...prev, ...fields }));
  };

  const { step, next, prev, isFirstStep, isLastStep, stepCount } = useMultiform(
    [
      <ProjectBasicInfo {...newProject} updateForm={updateForm} />,
      <ProjectMoreInfo {...newProject} updateForm={updateForm} />,
      <>
        <h1><AiFillCheckCircle/> Almost done!</h1><p>The project has been set up</p>
      </>,
    ]
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLastStep) {
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
      <form onSubmit={onSubmit} className="sm-form m-t-2" autoComplete="off">
        <FormProjectHeader />
        {step}
        <div className="button-section">
          {!isFirstStep && (
            <div className="circle-btn before-btn" onClick={prev}>
              <MdArrowBackIosNew />
            </div>
          )}
          {!isLastStep ? (
            <button type="submit" className="circle-btn next-btn" value="">
              <MdArrowForwardIos />
            </button>
          ) : (
            <button type="submit" className="finish-btn" value="">
              + Create project
            </button>
          )}
        </div>
      </form>
      <div className="check">{stepCount + 1}</div>
    </div>
  );
};

export default ProjectForm;
