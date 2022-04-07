import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes/routes';

const corsOptions = {
  origin: 'https://scalibacon.github.io',
}

const originBlocker = function(req: Request, res: Response, next: NextFunction) {  
  const ref = req.headers.referer;
  console.log('headers =>', req.headers);

  if(!ref){
    return res.status(403).send('Invalid origin refzada');
  }

  const baseURL = req.protocol + '://' + req.headers.host + '/';
  const reqUrl = new URL(req.url,baseURL);

  if(reqUrl.hostname !== 'https://scalibacon.github.io'){
    console.log('Tentativa de acesso bloqueada! Host =>', reqUrl.hostname);
    return res.status(403).send('Invalid origin');
  }

  return next();
}

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(originBlocker);
app.use(routes);
app.use(errors());

export default app;