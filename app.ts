import express from "express";
import dotenv from "dotenv";
import handler from "./src/routes/handler";
import cors from "cors";
import bodyParser from "body-parser";
import sequelize from "./sequelize";
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

handler(app);

app.listen(process.env.EXPRESS_PORT || 3000, async () => {
  sequelize.sync();
  console.log(
    `servicio Programacion II en el puerto: ${process.env.EXPRESS_PORT} `
  );
});
