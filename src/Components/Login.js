import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useFormik } from 'formik';
import * as Yup from 'yup';

// eslint-disable-next-line
import About from './About';

function Login()
{
	const navigate = useNavigate();
	window.localStorage.setItem("login",'false');
	document.body.style.backgroundColor = '#756AB6';

	const initialValues = { logUserName: "", logPassword: "" };
	const defUsername = 'Megha';
	const defPassword = '123456';

	const validationSchema = Yup.object({
		logUserName: Yup.string()
			.test('username-match','Username Didn\'t Match',function(value)
			{
				return value === defUsername;
			})
			.required('Enter Username'),
		logPassword: Yup.string()
			.test('password-match','Password Didn\'t Match',function(value) {
				return value === defPassword;
			})
			.required('Enter Password')	
	});

	const onSubmit = (values) => {
		if(values.logUserName !== defUsername && values.logPassword !== defPassword)
		{
			console.log(" Message => INVALID");
			document.body.style.backgroundColor = '#756AB6';
			window.localStorage.setItem("login",'false');
		}
		else
		{
			console.log(" Message => Logged In ");
			document.body.style.backgroundColor = '#FFFFFF';
			window.localStorage.setItem("login",'true');
			navigate('/About');
		}
	}

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit
	});

	return(
		<div>
			<div className="container d-flex justify-content-center align-items-center " style={{ height : '100vh', width: '100%', padding: '0 30px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `URL("https://mdbootstrap.com/img/Photos/Others/images/100.jpg")`, backgroundColor: '#756AB6' }} >
	     		<div className="container" style={{  margin: '1rem 0', width: '400px', borderRadius: '10px', textAlign: 'center', border: "2px solid #BBE2EC", boxShadow: '5px 5px 5px #BBE2EC', backdropFilter: 'blur(100px)', overflowX: 'hidden' }}>
	     			<form onSubmit={formik.handleSubmit} method="POST" className="text-center" style= {{ marginTop: '2rem', marginBottom: '3rem' }}>

	     				<h3 style = {{ color:'#AF2655', textShadow:'4px 0.5px 10px #EFFFFB', marginTop: '2rem', fontSize: '2rem', marginBottom: '2rem', }} > Login </h3>
						
						<div className="row" style = {{ margin: '1rem' }} >
							<input type="text" id="logUserName" name="logUserName"  {...formik.getFieldProps('logUserName')} placeholder=" Enter Username "  className="form-control" />
							<p className="text-danger" style={{ textAlign: 'left', fontWeight: '600' }} > {formik.errors.logUserName && formik.touched.logUserName && formik.errors.logUserName } </p>						
						</div>

						<div className="row" style = {{ margin: '1rem' }}>
							<input type="password" id="logPassword" name="logPassword"  {...formik.getFieldProps('logPassword')}  placeholder=" Enter Password " className="form-control" />
							<p className="text-danger" style={{ textAlign: 'left', fontWeight: '600' }} > {formik.errors.logPassword && formik.touched.logPassword && formik.errors.logPassword } </p>							
						</div>

						<div className="row d-grid justify-content-center" style = {{ margin: '1rem' }}>
							<button type="submit" className="btn btn-light btn-outline-success" style={{ fontWeight: '600', padding: '12px 20px', cursor: 'pointer', borderRadius: '10px', fontSize: '22px' }} >Submit</button>
						</div>

	     			</form>
	     		</div>
	     	</div>
		</div>
	);
}

export default Login;