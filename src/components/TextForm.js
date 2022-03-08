import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);   // This is for console 
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!", "success");
        // setText("You have clicked on handleUpClick");     // First use this line for button and update setText like above
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared!", "success");
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied!", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");   // This is for console 
        setText(event.target.value);
    }

    // Declare a new state variable, which we'll call "text"
    const [text, setText] = useState('');
    // setText("new text");    // Correct way to change the state
    // text = "new text";     // This is wrong way to change the state
  return (
      <>
<div className="container" style={{color: props.mode === 'dark'?'white':'rgb(47 72 92)'}}>
    <h1 >{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'gray':'white', color: props.mode === 'dark'?'white':'rgb(47 72 92)'}}id="myBox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Conver to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Conver to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-2" style={{color: props.mode === 'dark'?'white':'rgb(47 72 92)'}}>
        <hr/>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <hr/>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the texbox to preview it here"}</p>
    </div>
    </>
  )
}
