import { Router } from "express";
import { verifyToken } from "../../middlewares/authentication";
const router = Router();

import * as requestController from "../../controllers/request.controller";

router.get("/get_requests", verifyToken, requestController.getRequests);

router.get("/get_request/:id", verifyToken, requestController.getRequestById);

router.post("/create_request", verifyToken, requestController.createRequest);

router.put("/update_request", verifyToken, requestController.updateRequest);

router.delete("/delete_request/:id", verifyToken, requestController.deleteRequest);

export default router;