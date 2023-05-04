import { MdAddTask, MdList, MdPostAdd, MdOutlineSettings } from "react-icons/md";
import { Link } from "react-router-dom";

const QuickstartSection = () => {
  return (
    <div className="quickstart-section">
      <ul>
      <li>
          <Link to="edit">
            <MdOutlineSettings />
            Settings
          </Link>
        </li>
        <li>
          <Link to="tasks">
            <MdAddTask />
            Create a task
          </Link>
        </li>
        <li>
          <Link to="notes">
            <MdPostAdd />
            Create a note
          </Link>
        </li>
        <li>
          <Link to="">
            <MdList />
            See all tasks
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickstartSection;
