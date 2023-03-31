import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { ProfilePlaceholder } from "../../../components/UserProfile";
import convertUrl from "../utils/convertUrl";
import { getDueMessage } from "../utils/getDays";
import { normalizeText } from "../utils/normalizeText";
import DropdownEdit from "./DropdownEdit";

type Props = {
  task: any;
  index: number;
};

const Card = ({ task, index }: Props) => {
  const location = useLocation();

  return (
    <>
      <div key={task.id} id={task.id} className="kanban-card">
        <Link to={`${task.id}/${convertUrl(task.name)}`}>
          <div className="kanban-card__header">
            <h3 className="kanban-card__header__title">{task.name}</h3>
            <div className="kanban-card__header__actions">
              <DropdownEdit>
                <button className="settings-btn">
                  <BsThreeDots />
                </button>
              </DropdownEdit>
            </div>
          </div>
          <div className="kanban-card__content">
            {normalizeText(task.content, 140)}
          </div>
          <div className="kanban-card__status">
            <div className="card-status__container">
              {getDueMessage(task.dueDate)}
            </div>
            {task.members.length > 0 && <ProfilePlaceholder />}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
