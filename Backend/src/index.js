import express from "express";
import searchRoutes from "./routes/searchRoutes.js";
import cors from "cors";

const app = express();

app.listen(3000);

app.use(cors());
app.use(searchRoutes);

console.log("Server is listening on port", 3000);
