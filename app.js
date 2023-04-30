const express = require("express");
const router = require("./routes");
const app = express();
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");
const port = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/pasien", router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
