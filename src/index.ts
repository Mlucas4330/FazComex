import express from 'express';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT, () => {
    console.log('Running on: ' + process.env.PORT);
});
