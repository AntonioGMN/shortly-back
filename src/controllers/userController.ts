import { Request, Response } from 'express';
import * as userService from '../service/userService.js';

export async function sighUp(req: Request, res: Response) {
  const user = req.body;
  const response = await userService.signUp(user);
  res.send(response).sendStatus(201);
}
