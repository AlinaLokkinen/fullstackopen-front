import "./App.css";
import Note from "../components/Note";
import { useState } from "react";

const App = (props) => {

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('a new note');
  const [showAll, setShowAll] = useState(true);

  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  }

  const addNote = (e) => {
    e.preventDefault();
    const noteObj = {
      content: newNote,
      important: Math.random() > 0.5,
      id: String(notes.length + 1),
    }

    setNotes(notes.concat(noteObj));
    setNewNote('');
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input 
        value={newNote}
        onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
 