import React, { useContext, useEffect, useState } from "react";
import { useInput } from "../hooks/useInput";
import { Navbar } from "../components/Navbar";
import { GlobalContext } from "../context/GlobalContext";
import RouterPage from "../hoc/RouterPage";
import { useParams } from "react-router-dom";
import NotesEditor from "../features/Notes";
import { v4 as uuidv4 } from "uuid";
import { AsideNav } from "../components/Aside";
import NotesList from "../features/Notes/component/NotesList";
import { normalizeText } from "../utils/normalizeText";

const Notes = () => {
  const { notes, dispatchNotes } = useContext(GlobalContext);

  if (!notes) {
    return null;
  }

  const { id } = useParams();
  const [note, setNote] = useState(
    notes.filter((note) => note.project_id === id)[0]
  );
  const [filterNotes, setFilterNotes] = useState(
    notes.filter((note) => note.project_id === id)
  );

  useEffect(() => {
    setFilterNotes(notes?.filter((note) => note.project_id === id));
  }, [notes]);

  const updateNote = (note: any) => {
    console.log("Updating note");
    dispatchNotes({ type: "UPDATE_NOTE", payload: note });
  };

  const deleteNote = (newNote: any) => {
    console.log("Deleting note");
    const response = filterNotes?.filter((note) => note.id != newNote.id);
    console.log(response);
    dispatchNotes({ type: "REMOVE_NOTE", payload: newNote.id });
  };

  const newNote = {
    id: uuidv4(),
    project_id: id,
    title: "",
    content: "",
    date: new Date(),
    updateTime: new Date(),
  };

  const title = useInput("text");
  const content = useInput("text");

  const onClick = (e: any) => {
    e.preventDefault();
    const idOfNote = e.target.id;
    const response = filterNotes?.filter((note) => note.id == idOfNote);
    if (response) {
      setNote(response[0]);
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    newNote.title = title.value;
    newNote.content = content.value;
    dispatchNotes({ type: "ADD_NOTE", payload: newNote });
  };

  const li = filterNotes?.map((item) => (
    <li key={item.id} id={item.id} onClick={onClick} className={`notes-list__item ${item.id == note?.id ? 'active' : ''}`}>
        {item.title}
    </li>
  ));

  return (
    <RouterPage>
      <Navbar />
      <main className="dashboard-layout">
        <AsideNav id={id} page="notes" />
        <div className="notes-list">
          <div className="fluid-container">
            <NotesList>
              {li.reverse()}
            </NotesList>

            <div>
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

          </div>
        </div>
        <div className="section-container__wrapper">
          <div className="fluid-container">
            {note && (
              <NotesEditor
                note={note}
                setNote={setNote}
                update={updateNote}
                deleteFuction={deleteNote}
                key={`${note.id}-editor`}
              />
            )}
          </div>
        </div>
      </main>
    </RouterPage>
  );
};

export default Notes;
