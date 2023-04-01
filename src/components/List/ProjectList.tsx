import { useContext } from "react";

import ProjectItem from "./ProjectItem";
import { useInput } from "../../hooks/useInput";
import { GlobalContext } from "../../context/GlobalContext";

const ProjectList = () => {
  const searchState = useInput("text");
  const { projects } = useContext(GlobalContext);
  console.log(projects);
  return (
    <>
      <div>
        <input {...searchState} />
      </div>
      <div>
        {projects
          .filter((project) => {
            return (
              project.name
                .toLowerCase()
                .includes(searchState.value.toLowerCase()) ||
              project.description
                .toLowerCase()
                .includes(searchState.value.toLowerCase())
            );
          })
          .map((project) => {
            return (
              <ProjectItem
                name={project.name}
                description={project.description}
                id={project.id}
                key={project.id + project.name}
              />
            );
          })}
      </div>
    </>
  );
};

export default ProjectList;
