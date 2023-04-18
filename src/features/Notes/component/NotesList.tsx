import React, { ReactNode } from "react";

type Props = {
  children: JSX.Element | ReactNode;
};

const NotesList = ({ children }: Props) => {
  return (
    <>
      <h2 className="section-header-title">
        <div className="status-indicator status-indicator--in-progress"></div>
        Notes
      </h2>
      <ul className="notes-list__container">{children}</ul>
    </>
  );
};

export default NotesList;
