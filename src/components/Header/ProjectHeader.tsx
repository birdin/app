import { useContext } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { GlobalContext } from "../../context/GlobalContext";
const ProjectHeader = () => {
  const { state } = useContext(GlobalContext);
  const project = state.user.projects[0];

  return (
    <div className="wide-container">
      <div className="header-container">
        <picture className="project-logo">
          <img src={project.img} alt="Project logo" />
        </picture>
        <h2 className="project-header__title">{project.name}</h2>
      </div>
      <div className="header-statusbar">
        <div className="header-statusbar__item">
          <span className="header-statusbar__tag">Project status</span>
          <span className="header-statusbar__info">
            <span className="statusbar__indicator statusbar__indicator--active"></span>
            Active
          </span>
        </div>
        <div className="header-statusbar__item">
          <span className="header-statusbar__tag">Project type</span>
          <span className="statusbar-category__container">
            <span className="statusbar-category__item">Architecture</span>
            <span className="statusbar-category__item">Web</span>
          </span>
        </div>
        <div className="header-statusbar__item">
          <span className="header-statusbar__tag">Project type</span>
          <span className="header-statusbar__info">Public</span>
        </div>
        <div className="header-statusbar__item">
          <span className="header-statusbar__tag">Deadline</span>
          <span className="header-statusbar__info">
            <AiOutlineCalendar /> 10/12/2023
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
