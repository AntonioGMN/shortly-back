import { Router } from 'express';
import * as urlController from '../controllers/urlController.js';
import validateToken from '../Middlerware/validateToken.js';

const urlRouter = Router();
urlRouter.post('/shortly', validateToken, urlController.create);
urlRouter.get('/:url', urlController.redirect);
urlRouter.get('/', validateToken, urlController.getAll);

export default urlRouter;
