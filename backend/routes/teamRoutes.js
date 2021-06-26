import express from "express";
import {
    createTeam,

} from "../controllers/team.js";

import { admin, protect } from "../middleware/authMiddleware.js";
const router = express.Router();


//createTeam Route
router.post('/createteam',protect,createTeam);


export default router;
