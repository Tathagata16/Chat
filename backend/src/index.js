import express from "express";
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.routes.js"
import dotenv from "dotenv"
import {connectDB} from "./lib/db.js"
import cookieParser from "cookie-parser"
import cors from "cors";
import {app,server} from "./lib/socket.js";



dotenv.config();

const PORT = process.env.PORT;
app.use(cors({
    origin:"http://localhost:5174",
    credentials:true
}
));
//middlewares:
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json({ limit: "10mb" })); // ✅ Increase to 10MB

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);



server.listen(PORT, ()=>{
    console.log("server is running on port 5001");
    connectDB();
})