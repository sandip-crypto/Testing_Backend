import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8080;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening at port: ${PORT} `);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection failed !!", error);
  });
