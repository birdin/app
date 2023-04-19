import React, { ReactNode } from "react";

type Props = {
  children: JSX.Element | ReactNode;
  onCreate: () => void;
};

const NotesList = ({ children, onCreate }: Props) => {

  return (
    <>
      <div className="d-flex-center">
        <h2 className="section-header-title">
          <div className="status-indicator status-indicator--in-progress"></div>
          Notes
        </h2>
        <button className="create-note__button" onClick={onCreate}>
          + Create
        </button>
      </div>
      <ul className="notes-list__container">{children}</ul>
    </>
  );
};

export default NotesList;
