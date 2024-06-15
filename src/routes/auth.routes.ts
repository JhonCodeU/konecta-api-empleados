import { Router } from "express";
const router = Router();

import * as authController from "../controllers/auth.controller";

/**
 * @openapi
 * components:
 *   schemas:
 *     GenerarToken:
 *       type: object
 *       required:
 *         - usuario
 *         - clave
 *       properties:
 *         usuario:
 *           type: string
 *           description: The username of the user
 *         clave:
 *           type: string
 *           description: The password of the user
 *       example:
 *         usuario: johndoe
 *         clave: password
 */

router.post("/crear_usuario", authController.signUp);

/**
 * @openapi
 * /api/auth/generar_token:
 *   post:
 *     summary: GenerarToken User and password for access
 *     tags: [GenerarToken]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GenerarToken'
 *     responses:
 *       200:
 *         description: User permitted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GenerarToken'
 *       500:
 *         description: Some server error
 */
router.post("/generar_token", authController.signIn);

export default router;
