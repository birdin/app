import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { ProfilePlaceholder } from "../../../components/UserProfile";
import { getDueMessage } from "../utils/getDays";

type Props = {
  task: any;
  index: number;
};

const Card = ({ task, index }: Props) => {  
  return (
    <div key={task.id} id={task.id} className="kanban-card">
      <div className="kanban-card__header">
        <h3 className="kanban-card__header__title">{task.name}</h3>
        <div className="kanban-card__header__actions">
          <button className="settings-btn">
            <BsThreeDots />
          </button>
        </div>
      </div>
      <div className="kanban-card__content">
        {task.content}
      </div>
      <div className="kanban-card__status">
          <div className="card-status__container">
            {getDueMessage(task.dueDate)}
          </div>
          {
            task.members.length > 0 && <ProfilePlaceholder />
          }
        </div>
    </div>
  );
};

export default Card;
