import React, { useState } from "react";

export default function StateAndEvent() {
    const [text, setText] = useState()

    function setVal(event)
    {  
        setText(event.target.value)
    }

    function changeCase(){
        let newtext = text.toUpperCase()
        setText(newtext)
    }
  return (
    <>
      <div className="container mt-4">
      <h3 className="mb-3">Pls Enter A Massage</h3>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={setVal}
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary mt-3" onClick={changeCase}>Upper Case</button>
      </div>
      {/* <div className="container mt-5">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} are the words and the characters are {text.length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div> */}
    </>
  );
}
