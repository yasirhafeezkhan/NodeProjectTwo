import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import db from "./config/database";
import dotenv from "dotenv";
import registrationRoute from "./routes/RegistrationRoute";
import loginRoute from "./routes/Login";
import userRoute from "./routes/User";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphQL";

//===Configure
dotenv.config();
const app = express();
app.use(cors());
//===Port Access
const PORT = process.env.PORT;

//=== Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

//=== Checking Route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ Message: "Hi! Welcome to node project" });
});

//===Port Listen Route
app.listen(PORT, () => {
  console.log("===== Server Running on localhost:", PORT);
  db.authenticate().then(async () => {
    console.log("===connected to db===");
    await db.sync({ force: false });
    console.log("Model generated successfully");
  });
});

//===Api Route Starts
app.use("/api", registrationRoute);
app.use("/api", loginRoute);
app.use("/api", userRoute);
