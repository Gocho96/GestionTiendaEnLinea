import express from "express";
import config from "./config";
import productRoutes from "./routes/product.routes";
import userRoutes from "./routes/user.routes";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.set("port", config.PORT);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/api", productRoutes);
app.use("/api", userRoutes);

export default app;
