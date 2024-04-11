
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Components/Login';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Alert from './Components/Alert';

function App() {

	const [alert, setAlert] = useState(null);
	const showAlert = (message, type) => 
	{
		setAlert({ 
			msg: message, 
			type: type 
		})
		setTimeout(() => { 
			setAlert(null); 
		}, 9000);
	}

	// const [mode,setMode] = useState('light');
	const [mode,setMode] = useState('info');
	const [bgColor,setBgColor] = useState('#ffffff');
	const [color,setColor] = useState('#000000');

	// document.body.style.backgroundColor = '#ffffff';
	document.body.style.backgroundColor = bgColor;
	document.body.style.color = color;

	const toggleMode = () =>
	{
		if(mode === 'info')
		{
			setMode('primary');
			document.body.style.backgroundColor = setBgColor('#3c3a3a');
			document.body.style.color = setColor('#def9f3');			
		}
		else
		{
			setMode('info');
			document.body.style.backgroundColor = setBgColor('#ffffff');
			document.body.style.color = setColor('#000000');

		}
	}

	return (
		<Router>
			<div className="content-container" >
			
				<Routes>
					<Route exact path="/" element={<Login/>} />
					
					<Route exact path="/About" element={
						<>
							<Navbar mode={mode} toggleMode={toggleMode} bgColor={bgColor}/>
							<About/>
						</>}
					/>
					<Route exact path="/Home" element={
						<>
							<Navbar mode={mode} toggleMode={toggleMode} bgColor={bgColor}/>
							<Alert alert={alert}/>
							<Home showAlert={showAlert} heading=" Welcome To Text Analyzer" />
						</>}
					/>

				</Routes>
			</div>
		</Router>
	);
}

export default App;
