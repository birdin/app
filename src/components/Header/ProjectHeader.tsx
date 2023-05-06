import { useContext } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { GlobalContext } from "../../context/GlobalContext";
import { ProjectPlaceholder } from "../Placeholder";

const ProjectHeader = () => {
  const { state, projects } = useContext(GlobalContext);
  const project = state.user.project;

  //const projectResult = projects.find((item) => item.id == project.id.toString());
  //console.log("Project header list", projectResult);
  console.log("Project header", project);

  return (
    <div className="wide-container">
      <div className="header-container">
        {project.img ? (
          <picture className="project-logo">
            <img src={project.img} alt="Project logo" />
          </picture>
        ) : (
          <ProjectPlaceholder className="wide-avatar" />
        )}
        <div>
          <h2 className="project-header__title">{project.name}</h2>
          <div className="header-statusbar">
            <div className="header-statusbar__item">
              <span className="header-statusbar__tag">Project status</span>
              <span className="header-statusbar__info">
                <span className="statusbar__indicator statusbar__indicator--active"></span>
                {project.status}
              </span>
            </div>
            <div className="header-statusbar__item">
              <span className="header-statusbar__tag">Project type</span>
              <span className="statusbar-category__container">
                {project.categories.map((item, index) => (
                  <span
                    key={index + "cat-item"}
                    className="statusbar-category__item"
                  >
                    {item.name}
                  </span>
                ))}
              </span>
            </div>
            <div className="header-statusbar__item">
              <span className="header-statusbar__tag">Project type</span>
              <span className="header-statusbar__info">Public</span>
            </div>
            <div className="header-statusbar__item">
              <span className="header-statusbar__tag">Deadline</span>
              <span className="header-statusbar__info">
                <AiOutlineCalendar />
                {project.deadline}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
