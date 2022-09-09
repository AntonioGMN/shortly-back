import * as urlRepository from '../repositories/url.js';
import dayjs from 'dayjs';
import {
  forbidden,
  notFound,
  unauthorized,
  bad_request,
} from '../utils/errorUtils.js';

export async function createUrl(url: string, userId: number) {
  if (url === undefined || url === null || url === '')
    bad_request('erro no body');

  const urls = await urlRepository.getByUserId(userId);
  const shortUrl = `http://localhost:4000/${userId}${
    urls.length
  }${dayjs().millisecond()}`;

  await urlRepository.create(url, shortUrl, userId);

  return;
}

export async function getOrinalUrl(shortUrl: string) {
  const response = await urlRepository.getByShortUrl(shortUrl);
  return response;
}

export async function getAll(userId: number) {
  const urls = await urlRepository.getByUserId(userId);
  return urls;
}
