import express from "express";
import dbConnection from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await dbConnection();

connection.on("error", (erro) => {
    console.log("The connection has failed", erro);
});

connection.once("open", () => {
    console.log("The connection has been stabilsh")
})

const app = express();
routes(app);


export default app