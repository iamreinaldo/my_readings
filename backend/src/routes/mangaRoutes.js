import express from "express";
import MangaController from "../controllers/mangaController.js";

const routes = express.Router();

routes.get("/mangas", MangaController.listManga);
routes.post("/mangas", MangaController.addManga);

export default routes;
