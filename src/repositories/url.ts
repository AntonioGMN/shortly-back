import connection from '../database.js';

export async function getByUserId(userId: number) {
  const response = await connection.query(
    'SELECT * FROM URLs WHERE userId=$1',
    [userId],
  );
  return response.rows;
}

export async function create(
  url: string,
  shortUrl: string,
  userId: number,
  created,
) {
  const response = await connection.query(
    'INSERT INTO urls (shortUrl, url, userId, created) VALUES ($1, $2, $3, $4)',
    [shortUrl, url, userId, created],
  );

  console.log(response);
  return response.rows;
}

export async function getByShortUrl(shortUrl: string) {
  console.log(shortUrl);
  const response = await connection.query(
    'SELECT * FROM urls WHERE shortUrl LIKE $1',
    [`%${shortUrl}`],
  );
  return response.rows[0];
}
