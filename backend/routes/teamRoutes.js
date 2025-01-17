import express from "express";
import {
  createTeam,
  searchTeam,
  sendRequest,
  joinTeamById,
  getRequests,
  handleRequest,
  removeMember,
  editDetails,
  updatePassword,
  filterByDetails,
  getMyRequestedTeams,
  getMyTeams,
  getTeamByID,
} from "../controllers/team.js";

import { protect, teamAdmin, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

// router.param('TeamId', getTeamByID)

// route to trigger the capture
// router.get('/:TeamId', getTeam)

//createTeam Route
router.post("/createteam", protect, createTeam);
router.get("/searchteam", protect, searchTeam);
router.post("/sendrequest", protect, sendRequest);
router.post("/jointeam", protect, joinTeamById);
router.get("/getteamrequests", protect, teamAdmin, getRequests);
router.post("/handlerequest", protect, teamAdmin, handleRequest);
router.delete("/removemember", protect, teamAdmin, removeMember);
router.put("/editdetails", protect, teamAdmin, editDetails);
router.put("/changepassword", protect, teamAdmin, updatePassword);
router.post("/filterbydetails", protect, filterByDetails);
router.get("/getmyrequestedteams", protect, getMyRequestedTeams);
router.get("/getmyteams", protect, getMyTeams);

//getTeamDetails Route
router.get("/:id", protect, getTeamByID);

export default router;
