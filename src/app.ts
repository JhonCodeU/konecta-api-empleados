import express from 'express';
import morgan from 'morgan';
//import pkg from '../package.json';
import routes from './routes/index.routes';
import cors from 'cors';

const app = express();

//app.set('pkg', pkg);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:3001', // Permitir solicitudes desde este origen
  methods: ['GET', 'POST'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
}));

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
