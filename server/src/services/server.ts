import express, { Request, Response } from 'express';
import session from 'express-session';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import * as http from 'http';
import { mongoose } from '../db/mongoose';
import apiRouter from '../routes/index';

mongoose();
const app = express();
const server = new http.Server(app);

app.set('json spaces', 2);
app.use(cookieParser());
app.use(
	cors({
		origin: true,
		methods: ['GET', 'POST'],
		credentials: true,
	})
);
app.use(
	session({
		secret: 'mysecret123',
		cookie: { maxAge: 70000 },
		saveUninitialized: true,
		resave: true,
	})
);
app.use(express.json()); // Indica que el body viene como JSON
app.use(express.urlencoded({ extended: true })); // Indica que el body puede tener un informacion como no string
app.get('/', (req: Request, res: Response) => {
	res.json({ msg: 'Connected to the API' });
});
app.use('/api', apiRouter);

export default server;
