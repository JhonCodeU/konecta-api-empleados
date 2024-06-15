import express from 'express';
import morgan from 'morgan';
//import pkg from '../package.json';
import routes from './routes/index.routes';

const app = express();

//app.set('pkg', pkg);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.json({
    name: 'API REST para Konecta',
    author: 'John Arcila Castano',
    description: 'Api para la gestion de clientes', 
    version: '1.0.0',
  });
});


routes(app);

export default app;
