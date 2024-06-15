import pool from "../db/database";

const createRequest = async (request: any) => {
  const query = `INSERT INTO SOLICITUD (CODIGO, DESCRIPCION, RESUMEN, ID_EMPLEADO) VALUES ($1, $2, $3, $4) RETURNING *`;
  const values = [request.codigo, request.descripcion, request.resumen, request.id_empleado];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log(error);
  }
}


const findRequestById = async (id: number) => {
  const query = `SELECT * FROM SOLICITUD WHERE ID = $1`;
  const values = [id];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log(error);
  }
}

const findAllRequests = async () => {
  const query = `SELECT * FROM SOLICITUD`;

  try {
    const result = await pool.query(query);

    return result.rows;
  } catch (error) {

    console.log(error);
  }
}

const updateRequest = async (request: any) => {
  const query = `UPDATE SOLICITUD SET CODIGO = $1, DESCRIPCION = $2, RESUMEN = $3, ID_EMPLEADO = $4 WHERE ID = $5 RETURNING *`;
  const values = [request.codigo, request.descripcion, request.resumen, request.id_empleado, request.id];
  
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log(error);
  }
}

const deleteRequest = async (id: number) => {
  const query = `DELETE FROM SOLICITUD WHERE ID = $1`;
  const values = [id];

  try {
    await pool.query(query, values);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

const findRequestByEmployee = async (id: number) => {
  const query = `SELECT * FROM SOLICITUD WHERE ID_EMPLEADO = $1`;
  const values = [id];

  try {
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
}

export {
  createRequest,
  findRequestById,
  findAllRequests,
  updateRequest,
  deleteRequest,
  findRequestByEmployee
};