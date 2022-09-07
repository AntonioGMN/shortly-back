import { Request, Response } from 'express';
import * as urlService from '../service/url.js';

export async function create(req: Request, res: Response) {
  const { url } = req.body;
  const { userId } = res.locals;
  await urlService.createUrl(url, userId);
  res.sendStatus(201);
}

export async function redirect(req: Request, res: Response) {
  const shortUrl = req.params.url;
  console.log(shortUrl);
  const { url } = await urlService.getOrinalUrl(shortUrl);

  res.redirect(url);
}
