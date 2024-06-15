import * as Request from '../store/Request';
import { success, error } from '../libs/response';

const getRequests = async (req: any, res: any) => {
  try {
    const requests = await Request.findAllRequests();
    success(req, res, { requests }, 200, "0");
  } catch (err) {
    error(req, res, "Error al obtener solicitudes", 500, 'ocurrio un error', "1");
  }
}

const getRequestById = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    const request = await Request.findRequestById(id);
    success(req, res, { request }, 200, "0");
  } catch (err) {
    error(req, res, "Error al obtener solicitud", 500, 'ocurrio un error', "1");
  }
}

const createRequest = async (req: any, res: any) => {
  const request = req.body;
  try {
    const newRequest = await Request.createRequest(request);
    success(req, res, { newRequest }, 200, "0");
  } catch (err) {
    error(req, res, "Error al crear solicitud", 500, 'ocurrio un error', "1");
  }
}

const updateRequest = async (req: any, res: any) => {
  const request = req.body;
  try {
    const updatedRequest = await Request.updateRequest(request);
    success(req, res, { updatedRequest }, 200, "0");
  } catch (err) {
    error(req, res, "Error al actualizar solicitud", 500, 'ocurrio un error', "1");
  }
}

const deleteRequest = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    const deleted = await Request.deleteRequest(id);
    success(req, res, { deleted }, 200, "0");
  } catch (err) {
    error(req, res, "Error al eliminar solicitud", 500, 'ocurrio un error', "1");
  }
}

export {
  getRequests,
  getRequestById,
  createRequest,
  updateRequest,
  deleteRequest
};