import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { ProjectHeader } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { GlobalContext } from "../context/GlobalContext";
import RouterPage from "../hoc/RouterPage";

const ProjectHomepage = () => {
  const { data, notes } = useContext(GlobalContext);
  const { id } = useParams();

  const keys = data.tasks !== undefined ? Object.keys(data.tasks) : [""];
  const li = [];
  let note = {}
  for(let i = 0; i < notes.length; i++){
    if(notes[i].project_id === id){
      note = notes[i]
      break;
    }
  }

  console.log(note, notes)

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
        <h3>Notas</h3>
        <Link to={`/project/${id}/notes`}>Ver todas</Link>
      </div>
    </RouterPage>
  );
};

export default ProjectHomepage;
