import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes/routes';
import originBlocker from './security/originBlocker';

const corsOptions = {
  origin: ['https://scalibacon.github.io'],
}

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(originBlocker);
app.use(routes);
app.use(errors());

export default app;