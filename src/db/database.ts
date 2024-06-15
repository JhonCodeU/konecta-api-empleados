import { configDB, config } from '../config';
import pkg from 'pg';
const { Pool } = pkg;

var pool: any = new Pool();

(async () => {
  try {
    const dataBasesSelected = config.idEmpresa == 1 ? 0 : 1;

    pool = new Pool(configDB[dataBasesSelected]);
    var client = null;

    client = await pool.connect();
    await client.query('select $1::text as name', ['brianc']);

    if (configDB[dataBasesSelected].host === 'localhost') {
      console.log('Conectado a la base de datos de DESARROLLO');
    } else {
      console.log('Conectado a la base de datos de PRODUCCIÓN');
    }

  } finally {
    if (client) {
      client.release();
    }
  }
})().catch(e => {
  console.error('Error al conectar a la base de datos:', e.message);
  console.error('Pila de llamadas:', e.stack);
});

export default pool;