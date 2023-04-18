import express, * as Express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';

import config from './config/config';

const listenExpressServer = (app: Express.Application, port: number) => {
  return new Promise<void>((res, rej) => {
    try {
      app.listen(port, res);
    } catch (e) {
      rej(e);
    }
  });
};

const initApp = async () => {
  const app = express();

  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(compression());
  app.use(cors());
  app.options('*', cors());

  await listenExpressServer(app, Number(config.port));

  console.log('Express server initialized.');
};

export default initApp;
