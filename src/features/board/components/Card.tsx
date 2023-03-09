import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { ProfilePlaceholder } from "../../../components/UserProfile";

type Props = {
  task: any;
  index: number;
};

const Card = ({ task, index }: Props) => {
  const getDates = (date: any) => {
    if(date === undefined) return ""

    const today = new Date()
    const dueDate = new Date(date)
    console.log(today, dueDate)
    return ''
  }
  
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
            <span>{getDates(task.dueDate)}</span>
          </div>
          {
            task.members.length > 0 && <ProfilePlaceholder />
          }
        </div>
    </div>
  );
};

export default Card;
