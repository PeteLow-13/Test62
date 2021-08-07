import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Pete Doe',
    email: 'pete@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
