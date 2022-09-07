import cors from 'cors';
import express, { json } from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import router from './routers/index.js';
import errorHandlingMiddleware from './Middlerware/errorHandlingMiddleware.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandlingMiddleware);

export default app;
