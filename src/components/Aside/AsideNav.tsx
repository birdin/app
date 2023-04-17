import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaTasks } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";

type AsideProps = {
  id: string | undefined;
};

const AsideNav = ({ id }: AsideProps) => {
  return (
    <aside className="nav-sidebar">
      <ul>
        <li>
          <Link to={`/project/${id}`}>
            <div className="aside-icon__container">
              <RxDashboard />
            </div>
            Home
          </Link>
        </li>
        <li>
          <Link to={`/project/${id}/tasks`}>
            <div className="aside-icon__container">
              <FaTasks />
            </div>
            Tasks
          </Link>
        </li>
        <li>
          <Link to={`/project/${id}/notes`}>
            <div className="aside-icon__container">
              <GrNotes />
            </div>
            Notes
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AsideNav;
