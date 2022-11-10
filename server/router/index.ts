import { Router } from "express";
const router: any = Router;
import ValuesController from "../controller/ValuesController";
const setRout: any = new router();
setRout.get("/values", ValuesController.getVals);
module.exports = setRout;
