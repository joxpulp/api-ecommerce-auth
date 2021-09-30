export interface Products {
	title: string;
	price: number;
	thumbnail: string;
}

export interface Messages {
	email: string;
	message: string;
	date: string;
	time: string;
}

export interface User {
	user: string,
	password: string
}

declare module 'express-session' {
	interface Session {
		loggedIn: boolean;
	}
}