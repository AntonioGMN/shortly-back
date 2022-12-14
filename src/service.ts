import dotenv from 'dotenv';
import app from './app.js';

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.warn(`Server is listening on port ${PORT}.`);
});
