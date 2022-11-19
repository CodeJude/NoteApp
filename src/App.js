import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

const App = () => {
  const [notes, setNotes] = useState([]);

  const createNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });

    console.log(newNote);
  };

  const deleteNote = (id) => {
    console.log("Clicked");
  };

  return (
    <div>
      <Header />
      <CreateArea onCreate={createNote} />
      {notes.map((noteItem) => {
        return (
          <Note
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
