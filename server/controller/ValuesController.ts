import ValuesService from "../service/ValuesService";
// @ts-ignore
import express from "express";
class ValuesController {
  async getVals(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const form = ValuesService.getVals();
    return res.json(form);
  }
}
export default new ValuesController();
