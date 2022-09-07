import * as userRepository from '../repositories/userRepository.js';
import user from '../repositories/userRepository.js';
import bcrypt from 'bcrypt';
import { forbidden } from '../utils/errorUtils.js';

export async function signUp(userDate: user) {
  const findedUser = await userRepository.findByEmail(userDate.email);
  if (findedUser) {
    forbidden('esse usuário já está cadastrado');
  }

  const passwordHash = bcrypt.hashSync(userDate.password, 10);

  const hashUser = { ...userDate, password: passwordHash };
  await userRepository.signUp(hashUser);
  return;
}
