import express, {Router} from 'express';
import userController from '../controllers/user.controller';

const router: Router = express.Router()

router.get("/", userController.getAll);
router.post("/", userController.create);

export default router;