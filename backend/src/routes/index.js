import express from "express";
import mangas from "./mangaRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("My Reading List"));

    app.use(express.json(), mangas)
}

export default routes;