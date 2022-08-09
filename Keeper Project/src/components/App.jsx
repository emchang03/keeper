import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((items, index) => {
        return index != id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea handleClick={addNote} />
      {notes.map((aNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={aNote.title}
            content={aNote.content}
            handleDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
