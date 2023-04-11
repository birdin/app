import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { ProjectHeader } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { GlobalContext } from "../context/GlobalContext";
import RouterPage from "../hoc/RouterPage";

const ProjectHomepage = () => {
  const { data } = useContext(GlobalContext);
  const { id } = useParams();

  console.log(data.tasks);
  const keys = data.tasks !== undefined ? Object.keys(data.tasks) : [""];
  const li = [];

  for (let i = keys.length - 1; i > keys.length - 6 && i > 0; --i) {
    const key = keys[i];
    const task = data.tasks[key];
    li.push(<li key={i}> {task?.name} </li>);
  }

  return (
    <RouterPage>
      <Navbar />
      <ProjectHeader />
      <div className="fluid-container">
        <h1>Project Homepage</h1>
        <Link to={`/project/${id}/tasks`}>Tasks</Link>
        <Link to={`/project/${id}/edit`}>Edit</Link>
        <ul>{li}</ul>
      </div>
    </RouterPage>
  );
};

export default ProjectHomepage;
