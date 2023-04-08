import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProjectEditForm } from "../components/Form";
import { Navbar } from "../components/Navbar";
import { GlobalContext } from "../context/GlobalContext";

const EditProject = () => {
  const { projects, dispatchProjects } = useContext(GlobalContext);
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

    const onEdit = (project: any) => {
        dispatchProjects({type: "UPDATE_PROJECT", payload: project});
    }

  return (
    <>
      <Navbar />
      <ProjectEditForm project={project} editProject={onEdit}/>
    </>
  );
};

export default EditProject;
