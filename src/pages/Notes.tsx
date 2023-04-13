import React, { useContext, useEffect } from "react";
import { useInput } from "../hooks/useInput";
import { Navbar } from "../components/Navbar";
import { GlobalContext } from "../context/GlobalContext";
import RouterPage from "../hoc/RouterPage";
import { useParams } from "react-router-dom";
import NotesEditor from "../features/Notes";

const Notes = () => {
  const { notes, dispatchNotes } = useContext(GlobalContext);
  const { id } = useParams();

  const newNote = {
    id: new Date().getTime(),
    project_id: id,
    title: "",
    content: "",
    date: new Date(),
  };

  const title = useInput("text");
  const content = useInput("text");

  const li = notes.filter((note) => note.project_id === id).map((note) => (
    <li key={note.id}>{note.title}</li>
  ));

  const onSubmit = (e: any) => {
    e.preventDefault();
    newNote.title = title.value;
    newNote.content = content.value;
    dispatchNotes({ type: "ADD_NOTE", payload: newNote });
  };


  return (
    <RouterPage>
      <Navbar />
      <div className="container">
        <ul>
          {li}
        </ul>
      </div>
      <div className="container">
        <h1>Create Note</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input {...title} name="title" id="title" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Content</label>
            <input {...content} name="description" id="description" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="container">
        <NotesEditor/>
      </div>
    </RouterPage>
  );
};

export default Notes;
