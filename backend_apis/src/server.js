import express from "express";
import cookieParser from "cookie-parser";
import fileupload from "express-fileupload";
import DbConnection from "./models/DBConfig";
require("dotenv").config();
DbConnection();

const app = express();
const Port = process.env.PORT;
app.use(
  fileupload({
    useTempFiles: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/health", (req, res) => {
  try {
    res.status(200).send("Health Ok");
  } catch (error) {
    console.log(error.message);
  }
});

import AuthRouter from "./routes/auth";
app.use("/api", AuthRouter);

app.listen(Port, (err, req, res) => {
  if (err) throw err;
  else {
    console.log(`app running on http://localhost:${Port}`);
  }
});
