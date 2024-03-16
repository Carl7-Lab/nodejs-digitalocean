import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  return res.status(200).json({
    msg: "Working",
  });
});

app.get("/login", (req, res) => {
  return res.status(200).json({
    msg: "Hey!, you are on login route!",
  });
});

app.get("/register", (req, res) => {
  return res.status(200).json({
    msg: "Hey! you are on register route!",
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on ${PORT}`);
});
