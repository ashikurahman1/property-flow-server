import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

mongoose.connect(process.env.MONGO_URI);

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Smart server is running');
});

app.listen(port, () => {
  console.log(`Smart server is running on port: ${port}`);
});
