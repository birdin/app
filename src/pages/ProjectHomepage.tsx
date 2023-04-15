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
  let note = {};
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].project_id === id) {
      note = notes[i];
      break;
    }
  }

  console.log(note, notes);

  for (let i = keys.length - 1; i > keys.length - 6 && i > 0; --i) {
    const key = keys[i];
    const task = data.tasks[key];
    li.push(
      <li key={i} className="section-tasls-list__item">
        {" "}
        {task?.name}{" "}
      </li>
    );
  }

  return (
    <RouterPage>
      <Navbar />
      <ProjectHeader />
      <div className="fluid-container">
        <div className="grid-2-columns">
          <div className="section-wrapper">
            <h2 className="section-header-title">
                <div className="status-indicator status-indicator--in-progress"></div>
                Tasks</h2>
            <p className="section-header-subtitle">List of the last tasks</p>
            <div className="section-container">
              <ul className="section-task-list">{li}</ul>
              <Link to={`/project/${id}/tasks`}>Tasks</Link>
              <Link to={`/project/${id}/edit`}>Edit</Link>
            </div>
          </div>
          <div className="section-wrapper">
            <h2 className="section-header-title">
                <div className="status-indicator status-indicator--in-progress"></div>
                Notes
            </h2>
            <p className="section-header-subtitle">
              Notes and importan information
            </p>
            <div className="section-container">
              {note ? (
                <div className="section--notes-container">{note?.content}</div>
              ) : (
                <p>No notes</p>
              )}
              <Link to={`/project/${id}/notes`}>Ver todas</Link>
            </div>
          </div>
        </div>
      </div>
    </RouterPage>
  );
};

export default ProjectHomepage;
