import path from "path";
import express from "express";
import authRouter from "./routes/authRouter.js";
import taskRouter from "./routes/taskRouter.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const __dirname = path.resolve();

const port = process.env.PORT || 5000;

// Express Application
const app = express();
app.use(express.json());
// cors

// Middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    exposedHeaders: ["Authorization"],
  })
);

// Routes
app.use("/", authRouter);
app.use("/task/", taskRouter);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
