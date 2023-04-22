import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Navbar } from "../components/Navbar";
import { GlobalContext } from "../context/GlobalContext";
import RouterPage from "../hoc/RouterPage";
import { useParams } from "react-router-dom";
import NotesEditor from "../features/Notes";
import { AsideNav } from "../components/Aside";
import NotesList from "../features/Notes/component/NotesList";
import NoteCard from "../features/Notes/component/NoteCard";

const Notes = () => {
  const { notes, dispatchNotes } = useContext(GlobalContext);

  if (!notes) {
    return null;
  }

  const { id } = useParams();
  
  const [note, setNote] = useState(
    notes.filter((note) => note.project_id === id).reverse()[0]
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

  const onClick = (e: any) => {
    if(!e) {
      return null;
    }
    const idOfNote = e;
    const response = filterNotes?.filter((note) => note.id == idOfNote);
    if (response) {
      setNote(response[0]);
    }
  };

  const onCreate = () => {
    newNote.id = uuidv4();
    newNote.title = "Untitled note";
    newNote.content = "";
    newNote.date = new Date();
    dispatchNotes({ type: "ADD_NOTE", payload: newNote });
  };

  const li = filterNotes?.map((item) => (
    <NoteCard 
    key={item.id} id={item.id} 
    onClick={() => onClick(item.id)} 
    className={`notes-list__item ${item.id == note?.id ? 'active' : ''}`} 
    title={item.title}
    date={item?.date?.toString()}
    />
  ));

  return (
    <RouterPage>
      <Navbar />
      <main className="dashboard-layout">
        <AsideNav id={id} page="notes" />
        <div className="notes-list">
          <div className="fluid-container">
            <NotesList onCreate={onCreate}>
              {li.reverse()}
            </NotesList>

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
