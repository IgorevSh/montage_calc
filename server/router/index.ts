const { Router } = require("express");
const { valuesController } = require("../controller/ValuesController");
const setRout: any = new Router();
setRout.get("/values", valuesController.getVals);
module.exports = setRout;
