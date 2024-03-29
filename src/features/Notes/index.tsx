import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import Note from "./component/NoteEditor";

import { FiTrash2 } from "react-icons/fi";


type Props = {
  note: any;
  setNote: any;
  update: any;
  deleteFuction: any;
};

const NotesEditor = ({ note, setNote, update, deleteFuction }: Props) => {
  if (note === undefined) {
    return null;
  }

  const title = useInput("text", note.title);
  const [contentInput, setContentInput] = useState(note.content);

  const updatedNote = useDebounce(contentInput, 2000)
  const updatedTitle = useDebounce(title.value, 2000)

  useEffect(() => {
    console.log("Was updated", contentInput);
    const newNote = {
      ...note,
      title: title.value,
      content: contentInput,
      updateTime: new Date(),
    };
    update(newNote);
  }, [updatedNote, updatedTitle]);

  const onRemove = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Removing note");
    deleteFuction(note)
  };

  return (
    <div className="form-note__section">
      <div className="title-group">
        <input {...title} />  
      </div>
      <div className="div">
        <button onClick={onRemove} className="delete-note__button">
          <FiTrash2 />
          Delete note
        </button>
      </div>
      <div>
        <Note key={`${note?.id}-note`} content={note.content} updateContent={setContentInput} />
      </div>
    </div>
  );
};

export default NotesEditor;
