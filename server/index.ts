// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const router = require("./router/index");
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/backend", router);
const start = async () => {
  try {
    app.listen(port, "0.0.0.0", () => {
      console.log("Сервер ожидает подключения...");
    });
  } catch (e) {
    console.error(e);
  }
};
start();
