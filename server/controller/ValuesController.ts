const { valService } = require("../service/ValuesService");

class ValuesController {
  async getVals(req: any, res: any, next: any) {
    const form = valService.getVals();
    return res.json(form);
  }
}
module.exports = { valuesController: new ValuesController() };
