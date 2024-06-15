import { signUp as userSignUp, signIn as userSignIn, findByUserName } from '../store/User';
import { config } from '../config';
import { success, error } from '../libs/response';
//import { sessiLogsWebService } from '../store/Logs.js';
import jwt from 'jsonwebtoken';

export const signUp = async (req: any, res: any) => {
  try {
    const userFound = await findByUserName(req, res);

    if (userFound) {
      return success(req, res, { message: "Usuario ya existe" }, 401, 200);
    }

    const savedUser = await userSignUp(req, res);

    const tokenPayload = {
      id: savedUser.usua_idusws,
      username: savedUser.usua_usuari
    };

    const token = jwt.sign(tokenPayload, config.SECRET, config.TOKEN_OPTIONS);

    success(req, res, { token }, 201, 200);
  } catch (e) {
    console.log(e);
    error(req, res, e, 400, 'Error al crear usuario', '04');
  }
};

export const signIn = async (req: any, res: any) => {
  try {

    if (!req.body.usuario || !req.body.clave) {
      return success(req, res, { message: "Usuario o contraseña requerida" }, 400, '01');
    }

    const userFound = await findByUserName(req, res);

    if (!userFound) {

      return success(req, res, { message: "Usuario o contraseña incorrecta" }, 401, '02');
    }

    const matchPass = await userSignIn(req, userFound);
    if (!matchPass) {
      return success(req, res, { message: "Contraseña o usuario incorrecta" }, 401, '02');
    }

    const tokenPayload = {
      id: userFound.usua_idusws,
      username: userFound.usua_usuari
    };
    config.USERNAME = userFound.usua_usuari;

    const token = jwt.sign(tokenPayload, config.SECRET, config.TOKEN_OPTIONS);
    jwt.verify(token, config.SECRET);
    //await sessiLogsWebService('success', 'est.est_usws', userFound.usua_usuari, token);

    success(req, res, { mensaje: 'autorización concedida', token }, 200, '00');
  } catch (e) {
    //await sessiLogsWebService('error', 'est.est_usws', req.body.usuario, null);
    error(req, res, e, 409, 'Error al iniciar sesión', '03');
  }
};