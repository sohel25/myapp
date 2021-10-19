import express from 'express'
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import {userRoute} from "./routes/users.js";
import cors from 'cors';
import bodyParser from 'body-parser';
import { authRoute } from './routes/auth.js';



dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false,useCreateIndex:true },
  () => {
    console.log("Connected to MongoDB");
  }
);


app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));





//middleware
app.use(express.json());




app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(8001,()=>{
    console.log("server is started ");
})