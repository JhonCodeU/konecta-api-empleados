import pool from "../db/database";

const createEmployee = async (employee: any) => {
  const query = `INSERT INTO EMPLEADO (FECHA_INGRESO, NOMBRE, SALARIO) VALUES ($1, $2, $3) RETURNING *`;
  const values = [employee.fecha_ingreso, employee.nombre, employee.salario];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log(error);
  }
}

const findEmployeeById = async (id: number) => {
  const query = `SELECT * FROM EMPLEADO WHERE ID = $1`;
  const values = [id];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log(error);
  }
}

const findAllEmployees = async () => {
  const query = `SELECT * FROM EMPLEADO`;

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
}

export {
  createEmployee,
  findEmployeeById,
  findAllEmployees
};