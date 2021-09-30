import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AddProduct from './components/addproduct/AddProduct';
import ProductTable from './components/producttable/ProductTable';
import ChatBox from './components/chatbox/ChatBox';
import { AppContext } from './context/AppContext';
import { socket } from './services/socket/socket';
import Login from './components/login/Login';

function App() {
	const {
		loggedData,
		setLoggedData,
		userName,
		setFetchIsLogged,
		loginData,
		products,
		setProducts,
		messages,
		setMessages,
		logout,
		setLogout,
		setFetchLogout,
		setLoginData,
	} = useContext(AppContext);

	useEffect(() => {
		setFetchIsLogged(true);
	}, []);

	useEffect(() => {
		socket.on('products', (data) => {
			setProducts(data);
		});
		return () => {
			socket.off('products');
		};
	}, [products]);

	useEffect(() => {
		socket.on('messages', (data) => {
			setMessages(data);
		});
		return () => {
			socket.off('messages');
		};
	}, [messages]);

	const handleLogout = () => {
		setLogout(true);
		setFetchLogout(true);
		setLoginData({ data: { logged: false } });
		setLoggedData({ data: { logged: false } });
	};

	console.log(logout);

	return (
		<motion.div
			style={{ height: '100%' }}
			className='d-flex flex-column
			justify-content-center align-items-center'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<motion.h1
				initial={{ opacity: 0, y: '-100%' }}
				animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
				className='text-center my-4 text-light'
			>
				Bienvenido a la API de Productos
			</motion.h1>
			<hr style={{ backgroundColor: 'white', width: '80%' }} />
			{loginData.data.logged || loggedData.data.logged ? (
				<>
					<div className='alert alert-success text-center' role='alert'>
						Bienvenido {userName}{' '}
						<button className='btn btn-warning ms-2' onClick={handleLogout}>
							Salir
						</button>
					</div>
					<AddProduct socket={socket} />
					<hr style={{ backgroundColor: 'white', width: '80%' }} />
					<ProductTable socket={socket} />
					<hr style={{ backgroundColor: 'white', width: '80%' }} />
					<ChatBox socket={socket} />
				</>
			) : (
				<Login />
			)}
		</motion.div>
	);
}

export default App;
