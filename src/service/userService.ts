import * as userRepository from '../repositories/userRepository.js';

export async function signUp(user) {
  const userRetunr = await userRepository.signUp(user);
  return userRetunr;
}
