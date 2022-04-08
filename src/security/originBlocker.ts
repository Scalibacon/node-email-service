import { NextFunction, Request, Response } from "express";

const originBlocker = (req: Request, res: Response, next: NextFunction) => {  
  const ref = req.headers.referer;
  console.log('headers =>', req.headers);

  if(!ref){
    console.log('Tentativa de acesso bloqueada!');
    return res.status(403).send('Invalid origin');
  }

  if(ref !== 'http://localhost:3000/' && ref !== 'https://scalibacon.github.io/'){
    console.log('Tentativa de acesso bloqueada! Host =>', ref);
    return res.status(403).send('Invalid origin');
  }

  return next();
}
 
export default originBlocker;