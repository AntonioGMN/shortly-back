import * as userRepository from '../repositories/userRepository.js';
import user from '../repositories/userRepository.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { forbidden, notFound, unauthorized } from '../utils/errorUtils.js';

interface loginDate {
  email: string;
  password: string;
}

export async function signUp(userDate: user) {
  const findedUser = await userRepository.findByEmail(userDate.email);
  if (findedUser) {
    forbidden('esse usuário já está cadastrado');
  }

  console.log(userDate);
  const passwordHash = bcrypt.hashSync(userDate.password, 10);

  const hashUser = { ...userDate, password: passwordHash };
  await userRepository.signUp(hashUser);
  return;
}

export async function login(loginDate: loginDate) {
  const findedUser = await userRepository.findByEmail(loginDate.email);
  if (findedUser === undefined) {
    notFound('esse email do usuário não encontrado');
  }

  const hashPassword = findedUser.password;
  const validatePassword = bcrypt.compareSync(loginDate.password, hashPassword);
  if (!validatePassword) unauthorized('Password invalid');

  const secretKey = process.env.JWT_SECRET;
  console.log(secretKey);
  const token = jwt.sign({ userId: findedUser.id }, secretKey);

  return token;
}
