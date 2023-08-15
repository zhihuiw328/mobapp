import mongoose from 'mongoose';
import express from 'express';
import Agent from '../schemas/agent.js';
import * as agentController from '../controller/agentController.js';

// agentRoutes is an instance of the express router
// Used to define our routes for agents
// The router will be added as a middleware and will take control of requests starting with path /agent.
const agentRoutes = express.Router();

//check token 
agentRoutes.route("/api/checkToken").post(agentController.checkToken);

//auth api
agentRoutes.route("/api/login").post(agentController.login);
agentRoutes.route("/api/login/confirm").post(agentController.confirmLogin);

// property api
agentRoutes.route("/api/SafetyCode").get(agentController.getSafetyCode).put(agentController.updateSafetyCode);

export default agentRoutes;