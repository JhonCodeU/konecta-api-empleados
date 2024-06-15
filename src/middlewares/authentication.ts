import { config } from '../config';
import { findById } from '../store/User';
import { success, error } from '../libs/response';
import jwt from 'jsonwebtoken';

export const verifyToken = async (req: any, res: any, next: any) => {

  try {
    const bearerHeader = req.headers['authorization'];

    if (bearerHeader === undefined) {
      return success(req, res, { message: "No hay token" }, 403, 200);
    }

    const token = bearerHeader.split(' ')[1];
    const decoded: any = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;

    const user = await findById(req.userId);

    if (!user) {

      return success(req, res, { message: "Usuario no existe" }, 404, 200);
    }

    req.user = user;
    next();

  } catch (e) {
    return error(req, res, "No autorizado", 403, 'Verifique las credenciales de acceso', "04");
  }
}