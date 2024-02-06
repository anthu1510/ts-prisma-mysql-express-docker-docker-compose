import  {Request, Response, NextFunction} from 'express';
import { db } from '../databases';

class UserController {
    async getAll(req: Request, res: Response, next: NextFunction) {
       try {
        const users = await db.users.findMany({});
        res.json(users)
       } catch (error) {
            next(error)
       }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const userData = req.body;
            const user = await db.users.create({
                data: userData
            });
            res.json(user);
        } catch (error) {
            next(error);
        }
    }
}

export default new UserController();