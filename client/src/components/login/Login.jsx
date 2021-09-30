import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';

function Login() {
	const {
		userName,
		setUserName,
		setFetchLogin,
		fetchLogin,
		logout,
		setLogout,
	} = useContext(AppContext);

	const login = (e) => {
		e.preventDefault();
		setFetchLogin(true);
	};

	useEffect(() => {
		setFetchLogin(false);
	}, [fetchLogin]);

	useEffect(() => {
		setTimeout(() => {
			setLogout(false);
		}, 2000);
	}, [logout]);

	return (
		<>
			{logout ? (
				<div className='alert alert-info text-center' role='alert'>
					Hasta luego {userName}
				</div>
			) : (
				<motion.form
					id='form'
					onSubmit={login}
					initial={{ opacity: 0, x: '-100%' }}
					animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
				>
					<h2 className='text-center mb-4 text-light'>Login de usuario</h2>
					<div className='form-floating mb-3'>
						<input
							type='text'
							className='form-control'
							id='name'
							name='name'
							placeholder='name'
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
							required
						/>
						<label htmlFor='title'>Nombre</label>
					</div>
					<button className='btn btn-success' type='submit'>
						Ingresar
					</button>
				</motion.form>
			)}
		</>
	);
}

export default Login;
