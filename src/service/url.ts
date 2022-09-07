import * as urlRepository from '../repositories/url.js';
import dayjs from 'dayjs';

export async function createUrl(url: string, userId: number) {
  const urls = await urlRepository.getByUserId(userId);
  const shortUrl = `localhost:4000/${userId}${url.length}`;
  const creationData = dayjs().locale('pe-tb').format('DD/MM/YY HH:mm');

  await urlRepository.create(url, shortUrl, +userId, creationData);
  return;
}

export async function getOrinalUrl(shortUrl: string) {
  const response = await urlRepository.getByShortUrl(shortUrl);
  return response;
}
