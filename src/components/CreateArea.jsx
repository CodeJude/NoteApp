import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false)

  //const for the title and content for the input and textarea
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(e) {
        //Destructured object by adding setNote to the previous note"" adding to the existing note

    const { name, value } = e.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  //Receiving the createNote in App.js function through props
  function addClick(event) {
    props.onCreate(note);
    //this sets the setNote back to an empty note thereby clearing the input and textarea for new ones 
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand(){
    setExpanded(true)
  } 

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> }
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={addClick}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
