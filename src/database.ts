import pg from 'pg';
//import '../setup.js';
const { Pool } = pg;
import dotenv from 'dotenv';

dotenv.config();

let config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
};
console.log(config);

// if (process.env.NODE_ENV === 'prod') {
//   config = {
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   };
// }

const connection = new Pool(config);

export default connection;
