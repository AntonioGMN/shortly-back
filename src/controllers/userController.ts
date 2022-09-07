import { Request, Response } from 'express';
import * as userService from '../service/userService.js';

export async function sighUp(req: Request, res: Response) {
  const user = req.body;
  await userService.signUp(user);
  res.sendStatus(201);
}
