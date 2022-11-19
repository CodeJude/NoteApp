import React from "react";

const Note = (props) => {

  const deleteClick =()=> {
    props.onDelete()
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteClick}>DELETE</button>
    </div>
  );
};

export default Note;
