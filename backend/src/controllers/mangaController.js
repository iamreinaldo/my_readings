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

    static async listMangaByName(req, res) {
        try{
            const mangaName = req.query.name;
            const foundManga = await manga.find({name: mangaName});
            res.status(200).json(foundManga)
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

    static async updateManga(req, res){
        try{
            const mangaName = req.params['name']
            await manga.findOneAndUpdate({name: mangaName}, req.body);
            res.status(200).json({message: `${mangaName} has been updated succsessfuly`})
        } catch(error) {
            res.status(500).json({message: `${error.message} - Manga has not been updated`})
        }
    }


}

export default MangaController