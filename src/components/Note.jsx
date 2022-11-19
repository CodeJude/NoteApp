import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {

  //Function to respond to the delete click been made, while receiving the deleteNote function
  const deleteClick =()=> {
    props.onDelete(props.id)
  
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteClick}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
