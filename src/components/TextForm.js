import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("text area value is changed");
        setText(event.target.value)
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopyClick = () => { 
       var text = document.getElementById('myBox');
       text.select();
       navigator.clipboard.writeText(text.value);
       alert(`You have copied the text`);
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/
        );
        setText(newText.join(' '))
    }

    

    const [text, setText] = useState("")

    return (
        <>
        <div className='container'>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}}   id="myBox" rows="5"></textarea>
                <button type="button" className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Upper case</button>
                <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleDownClick}>Convert to Lower case</button>
                <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
                <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleCopyClick}>Copy Text</button>
                <button type="button" className="btn btn-primary my-3 mx-2" onClick={removeExtraSpaces}>Remove Extra space</button>
            </div>
        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length-1} words {text.length} characters</p>
            <h5>You can read it in {0.008 * text.split(" ").length} minutes.</h5>
            <h2>Preview</h2>
            <p>{text.length>0?text: "Write in the textbox to preview the text."}</p>
        </div>
        </>
    )
}
