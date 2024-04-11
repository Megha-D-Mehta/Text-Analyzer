import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

function Home(props)
{
	window.localStorage.getItem("login");
	const navigate = useNavigate();
	useEffect(() => 
	{
		if(window.localStorage.getItem("login") === 'false')
		{
			navigate("/");
		}
	},[navigate])

	const [text, setText] = useState('');
	const handleOnChange = (event)=>
	{
		setText(event.target.value);
	}

	const toUpperCase = () => {
		console.log("UpperCase Clicked \n Original text : " + text);
		let uprcase = text.toUpperCase();
		setText(uprcase);
		props.showAlert("Converted to UpperCase","success");
	}

	const toLowerCase = () => {
		console.log("LowerCase Clicked \n Original text : " + text);
		let lwrcase = text.toLowerCase();
		setText(lwrcase);
		props.showAlert("Converted to LowerCase","info");
	}

	const clearText = () => {
		console.log("Clear Clicked \n Original text : " + text);
		let clear = '';
		setText(clear);
		props.showAlert("Text is Cleared","danger");
	}

	const copyText = () => {
		navigator.clipboard.writeText(text);
		props.showAlert("Text is Copied",'warning');
	}

	const removeExtraSpace = () => {
		console.log("Extra Space Removed \n Original text : " + text);
		let spc = text.split(/[ ]+/);
		setText(spc.join(" "));
		props.showAlert("Extra Space Removed",'success');
	}

	const encodeText = () => {
		console.log("Encode Text Clicked \n Original text : " + text);
		let encodedText = window.btoa(text);
		setText(encodedText);
		console.log(encodedText);
		props.showAlert("Text Encoded", "success");
	}

	const decodeText = () => {
		console.log("Decode Text Clicked \n Original text : " + text);
		let decodedText = window.atob(text);
		setText(decodedText);
		console.log(decodedText);
		props.showAlert("Text Decoded", "info");
	}

	const reverseText = () => {
		console.log("Reverse Text Clicked \n Original text : " + text);
		let reversedText = text.split("").reverse().join("");
		console.log(reversedText);
		setText(reversedText);
		props.showAlert("Text Reversed", "success");
	}

	const extractText = (criteria) => {
		console.log("Extract Text Clicked \n Original text : " + text);
		let extractedText;
		switch (criteria) {
			case "digits":
				extractedText = text.match(/\d+/g).join(''); // Joining the array of digits into a string
				setText(extractedText);
				break;
			case "letters":
				extractedText = text.match(/[a-zA-Z]+/g).join(''); // Joining the array of letters into a string
				setText(extractedText);
				break;
			default:
				extractedText = '';
		}
		console.log(extractedText);
		props.showAlert("Text Extracted", "info");
	}


	return(

		<div className="container" style = {{ marginTop: '9rem', }}>

			<h1 className="text-center" style={{ marginBottom: '30px' }} >{props.heading}</h1>
			<div className="mb-3">
				<textarea className="form-control my-4" value={text} placeholder="Enter Text" onChange={handleOnChange} style={{backgroundColor: '#DCF2F1', color: '#070A52', fontSize:'20px' }} id="text" rows="4"></textarea>
			</div>

			<button disabled={text.length===0} style={{ fontWeight: '600', fontSize: '20px', }} className="btn btn-outline-primary mx-2 my-2" onClick={toUpperCase}> UpperCase </button>
			<button disabled={text.length===0} style={{ fontWeight: '600', fontSize: '20px', }} className="btn btn-outline-primary mx-2 my-2" onClick={toLowerCase}> LowerCase </button>
			<button disabled={text.length===0} style={{ fontWeight: '600', fontSize: '20px', }} className="btn btn-outline-primary mx-2 my-2" onClick={clearText}> Clear Text </button>
			<button disabled={text.length===0} style={{ fontWeight: '600', fontSize: '20px', }} className="btn btn-outline-primary mx-2 my-2" onClick={copyText}> Copy Text </button>
			<button disabled={text.length===0} style={{ fontWeight: '600', fontSize: '20px', }} className="btn btn-outline-primary mx-2 my-2" onClick={removeExtraSpace}> Remove Extra Space </button>
			<button disabled={text.length===0} style={{ fontWeight: '600', fontSize: '20px', }} className="btn btn-outline-primary mx-2 my-2" onClick={encodeText}> Encode </button>
			<button disabled={text.length===0} style={{ fontWeight: '600', fontSize: '20px', }} className="btn btn-outline-primary mx-2 my-2" onClick={decodeText}> Decode </button>
			<button disabled={text.length===0} style={{ fontWeight: '600', fontSize: '20px', }} className="btn btn-outline-primary mx-2 my-2" onClick={reverseText}> Reverse </button>
			<button disabled={text.length===0} style={{ fontWeight: '600', fontSize: '20px', }} className="btn btn-outline-primary mx-2 my-2" onClick={() => extractText('digits')}> Extract Digits </button>
			<button disabled={text.length===0} style={{ fontWeight: '600', fontSize: '20px', }} className="btn btn-outline-primary mx-2 my-2" onClick={() => extractText('letters')}> Extract Letters </button>

			<div className="container my-3">
				<h2 style={{ marginTop:'40px', marginBottom: '20px' }}> Summary : </h2>
				<p style={{ fontWeight: '600', fontSize: '20px', }}><span style={{ marginLeft: '55px' }}>
					{text.split(/\s+/).filter((ch) => {return ch.length!==0}).length} words and {text.length} characters
				</span></p>
				<p style={{ fontWeight: '600', fontSize: '20px', }}><span style={{ marginLeft: '55px' }}> 
					{0.008 * text.split(/\s+/).filter((ch) => {return ch.length!==0}).length} Minutes read 
				</span></p>
			</div>
		</div>
	)
}

export default Home;