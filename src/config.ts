const configDB = [
  {
    user: 'usuario01',
    host: 'localhost',
    database: 'postgres',
    password: 'johncode2024*',
    port: 5432
  },
]; 

const config = {
  idEmpresa: 1,
  SECRET: 'tooles-secret',
  ISLOCALHOST: true,
  USERNAME: '',
  TOKEN_OPTIONS: {
    expiresIn: 3600,
  },
};

export { config, configDB };