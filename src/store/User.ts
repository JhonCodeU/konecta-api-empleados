import { config } from '../config';
import pool from '../db/database';
import bcrypt from 'bcryptjs';
import constantes from '../libs/constantes';

const esquema = 'public';

const encryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hashSync(password, salt);
}

const comparePassword = async (password: string, savedPassword: string) => {
  //Validations for no undefined
  if (!password || !savedPassword) {
    return false;
  }

  return bcrypt.compareSync(password, savedPassword);
}

const signUp = async (req: any, res: any) => {
  const { usuario, clave } = req.body;
  const hashedPassword = await encryptPassword(clave);

  try {
    const query = `INSERT INTO usuario(usua_idempr, usua_esttra, usua_idsesi, usua_usuari, usua_contra) 
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [config.idEmpresa, constantes.Auditoria.AGREGADO, 1, usuario, hashedPassword];
    const result = await pool.query(query, values);

    return result.rows[0];
  } catch (error) {
    console.log(error);
  }
}

const signIn = async (req: any, savedUser: any) => {
  const matchPassword = await comparePassword(req.body.clave, savedUser.usua_contra);
  if (!matchPassword) {
    return false;
  }

  return matchPassword;
}

const findById = async (usua_idusws: number) => {
  const query = `SELECT usua_idusws, usua_idempr, usua_esttra, usua_idsesi, usua_usuari FROM ${esquema}.usuario WHERE usua_idusws = $1`;
  const values = [usua_idusws];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log(error);
  }
}

const findByUserName = async (req: any, res: any) => {
  const { usuario } = req.body;
  const query = `SELECT usua_idusws, usua_idempr, usua_esttra, usua_idsesi, usua_usuari, usua_contra FROM ${esquema}.usuario WHERE usua_usuari = $1`;
  const values = [usuario];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log(error);
  }
}

export {
  signUp,
  signIn,
  findById,
  findByUserName
}