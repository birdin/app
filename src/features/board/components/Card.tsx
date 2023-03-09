import React from "react";
import { BsThreeDots } from "react-icons/bs";

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
            <div className="card-status__indicator"></div>
            <span>3 days of</span>
          </div>
        </div>
    </div>
  );
};

export default Card;
