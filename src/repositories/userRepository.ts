import connection from '../database.js';

export async function signUp(sighUpDate) {
  const { name, email, password } = sighUpDate;
  const user = await connection.query(
    `INSERT INTO users(name, email, password) VALUES ($1, $2, $3)`,
    [name, email, password],
  );
  return user;
}
