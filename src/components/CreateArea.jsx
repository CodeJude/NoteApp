import React, { useState } from "react";

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // const [addItem, setAddItem] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
    // console.log(prevNote);
    console.log(name);
    console.log(value);
  };

  const addClick = (e) => {
    props.onCreate(note);

    e.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button onClick={addClick}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
