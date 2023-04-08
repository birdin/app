import { useContext } from "react";

import ProjectItem from "./ProjectItem";
import { useInput } from "../../hooks/useInput";
import { GlobalContext } from "../../context/GlobalContext";
import { ProjectPageHeader } from "../Header";
import { SearchFilter } from "../Search";
import { AddButton } from "../Button";

const ProjectList = () => {
  const {value, onChange, type} = useInput("text");
  const { projects } = useContext(GlobalContext);
  console.log(projects);
  return (
    <div className="fluid-container narrow-padding">
      <ProjectPageHeader>
        <>
          <div>
            <h1>Projects</h1>
            <p>List all projects</p>
          </div>
          <div>
            <SearchFilter searchState={{value, onChange, type}} />
          </div>
          <div>
            <AddButton /> 
          </div>
        </>
      </ProjectPageHeader>

      <div>
        {projects
          .filter((project) => {
            return (
              project.name
                .toLowerCase()
                .includes(value.toLowerCase()) ||
              project.description
                .toLowerCase()
                .includes(value.toLowerCase())
            );
          })
          .map((project) => {
            return (
              <ProjectItem
                name={project.name}
                label={project.label}
                id={project.id}
                key={project.id + project.name}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProjectList;
