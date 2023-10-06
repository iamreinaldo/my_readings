import express from "express";
import MangaController from "../controllers/mangaController.js";

const routes = express.Router();

routes.get("/mangas", MangaController.listManga);
routes.get("/mangas/search", MangaController.listMangaByName);
routes.post("/mangas", MangaController.addManga);
routes.put("/mangas/:name", MangaController.updateManga);
routes.delete("/mangas/:name", MangaController.deleteManga);

export default routes;
