import * as Employee from '../store/Employee';
import { success, error } from '../libs/response';


const getEmployees = async (req: any, res: any) => {
  try {
    const employees = await Employee.findAllEmployees();
    success(req, res, { employees }, 200, "0");
  } catch (err) {
    error(req, res, "Error al obtener empleados", 500, 'ocurrio un error', "1");
  }
};

const getEmployeeById = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findEmployeeById(id);
    success(req, res, { employee }, 200, "0");
  } catch (err) {
    error(req, res, "Error al obtener empleado", 500, 'ocurrio un error', "1");
  }
};

const createEmployee = async (req: any, res: any) => {
  const employee = req.body;
  try {
    const newEmployee = await Employee.createEmployee(employee);
    success(req, res, { newEmployee }, 200, "0");
  } catch (err) {
    error(req, res, "Error al crear empleado", 500, 'ocurrio un error', "1");
  }
};

export {
  getEmployees,
  getEmployeeById,
  createEmployee
};