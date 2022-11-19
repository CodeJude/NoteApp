import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

const App = () => {
  const [notes, setNotes] = useState([]);

  //linking the onClick in CreateArea to  the createNote function
  const createNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });

    console.log(newNote);
  };

  //linking the onClick in Note to  the deleteNote function
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        //The return in the prevNotes sets it as the newNote array
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onCreate={createNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
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
