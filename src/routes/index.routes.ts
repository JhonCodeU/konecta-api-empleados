import auth from './auth.routes';

const routes = (app: any) => {
  app.use('/api/auth', auth);
  //app.use('/api/v1/', settlment);
};

export default routes;