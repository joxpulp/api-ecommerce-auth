import { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import { User } from '../models/interfaces';

class AuthController {
	authUser(req: Request, res: Response) {
		const { user, password } = req.body;
		const myUser = 'pepito';
		const myPwd = 'pepito123';
		if (user === myUser && password === myPwd) {
			req.session.loggedIn = true;
			return res.json({ msg: 'Bienvenido' });
		}
		return res.status(401).json({ error: 'No estas autorizado' });
	}

	validateLogin(req: Request, res: Response, next: NextFunction) {
		if ((req.session.loggedIn = true)) next();
		res.status(401).json({ error: 'No estas autorizado' });
	}
}

export const authController = new AuthController();
