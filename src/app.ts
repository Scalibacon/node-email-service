import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes/routes';

const app = express();
app.use(cors({
  origin: ['https://scalibacon.github.io']
}));
app.use(express.json());
app.use(routes);
app.use(errors());

export default app;