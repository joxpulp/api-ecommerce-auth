import { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import { User } from '../models/interfaces';

class AuthController {
	login(req: Request, res: Response) {
		const { username } = req.body;
		const myUser = 'pepito';
		if (username === myUser) {
			req.session.loggedIn = true;
			return res.json({ msg: 'Bienvenido', logged: req.session.loggedIn });
		}
		return res.status(401).json({ error: 'No estas autorizado', logged: false });
	}

	isLogged(req: Request, res: Response) {
		
		if (req.session.loggedIn === true) {
			return res.json({ logged: true});
		}
		return res.json({ logged: false });
	}

	logout(req: Request, res: Response) {
		if (req.session.loggedIn === true) {
			req.session.destroy();
			return res.json({ msg: 'Sesion finalizada', logged: false });
		}
		return res
			.status(404)
			.json({ error: 'No hay una session iniciada o ya esta finalizada' });
	}

	validateLogin(req: Request, res: Response, next: NextFunction) {
		if (req.session.loggedIn === true) next();
		else res.status(401).json({ error: 'No estas autorizado' });
	}
}

export const authController = new AuthController();
