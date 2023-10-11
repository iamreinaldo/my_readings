import mongoose from "mongoose";

const mangaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true },
    img: {type: String, required: true},
    author: {type: String, required: true},
    release_year: {type: Number},
    chapters: {type: Number, required: true},
    chapters_read: {type: Number, required: true}
}, {versionKey: false});

const manga = mongoose.model("mangas", mangaSchema);

export default manga;