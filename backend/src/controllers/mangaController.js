import manga from "../models/Manga.js";

class MangaController{
    
    static async listManga(req, res) {
        try{
            const listOfManga = await manga.find({});
            res.status(200).json(listOfManga)
        } catch(error) {
            res.status(500).json({message: `${error.message} - The search has failed`})
        }
    }

    static async addManga(req, res){
        const newManga = req.body;
        try{
            const mangaCreated = await manga.create(newManga);
            res.status(200).json({message: "new Manga added", manga: mangaCreated})
        } catch(error) {
            res.status(500).json({message: `${error.message} - new Manga has not been created`})
        }
    }
}

export default MangaController