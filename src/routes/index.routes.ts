import auth from './auth.routes';
import employee from './generalRoutes/employee.routes';
import request from './generalRoutes/request.routes';

const routes = (app: any) => {
  app.use('/api/auth', auth);
  app.use('/api/v1/', employee);
  app.use('/api/v1/', request);
};

export default routes;