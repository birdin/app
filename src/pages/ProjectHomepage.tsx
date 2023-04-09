import { Link, useParams } from "react-router-dom";

import { ProjectHeader } from "../components/Header";
import { Navbar } from "../components/Navbar";

const ProjectHomepage = () => {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <ProjectHeader />
      <div className="fluid-container">
        <h1>Project Homepage</h1>
        <Link to={`/project/${id}/tasks`}>Tasks</Link>
        <Link to={`/project/${id}/edit`}>Edit</Link>
      </div>
    </>
  );
};

export default ProjectHomepage;