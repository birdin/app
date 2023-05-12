import { Link } from "react-router-dom";
import { VoidTaskPlaceholder } from "../Placeholder";

const TaskWidget = (li: any, id: string) => {
  return (
    <div className="section-container">
      {li.li.length > 0 && (
        <>
          <ul className="section-task-list">{li.li}</ul>
          <Link to={`/project/${li.id}/tasks`} className="read-more-btn">
            Tasks
          </Link>
        </>
      )}
      {li != null && li.li.length === 0 && <VoidTaskPlaceholder />}
    </div>
  );
};

export default TaskWidget;
