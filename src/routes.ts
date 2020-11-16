import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(requst: Request, response: Response) {
  const user = createUser({
    email: 'mscflorentino@gmail.com',
    password: '123456',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      { title: 'Javascript', experience: 100 },
    ],
  });
  
  return response.json({ message: 'Hello World!'});
}