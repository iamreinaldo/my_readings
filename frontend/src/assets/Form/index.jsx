import "./form.css"
import { useState } from "react"


export default function MangaForm(){
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [author, setAuthor] = useState("");
    const [release, setRelease] = useState("");
    const [chapters, setChapters] = useState("");
    const [chaptersRead, setChaptersRead] = useState("");
    
    function handleData(e) {
        e.preventDefault();
        const formData = {
            name: name,
            image: image,
            author: author,
            release: release,
            chapters: chapters,
            chapters_read: chaptersRead
        };
    
        fetch(`http://localhost:3000/mangas/`, {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(formData),
        }).then(async (response) =>{
            if(!response.ok) {
                const errorData = await response.json();
                let error = errorData.message;
                if (errorData.message.error) error = errorData.message.error;
                window.alert(Object(error));
                throw new Error(error);
            } else {
                const responseData = await response.json();
                window.alert(responseData.message)
            }
        }).catch((error) => {
            console.error("Erro na solicitação: ", error.message);
        })
    }

    return(
    <section className="form-container">
        <form className="form" onSubmit={handleData}>
            <input 
                placeholder="Name" 
                type="text" 
                onChange={(e) => setName(e.target.value)} 
                required
            />
            <input 
                placeholder="Image URL"
                type="text" 
                onChange={(e) => setImage(e.target.value)} 
                required
            />
            <input 
                placeholder="Author" 
                type="text" 
                onChange={(e) => setAuthor(e.target.value)} 
                required
            />
            <input 
                placeholder="Release Year" 
                type="number" 
                onChange={(e) => setRelease(e.target.value)} 
                required
            />
            <input 
                placeholder="Chapters"
                type="number" 
                onChange={(e) => setChapters(e.target.value)} 
                required
            />
            <input 
                placeholder="Chapters Read" 
                type="number" 
                onChange={(e) => setChaptersRead(e.target.value)} 
                required
            />
        <button type="submit"> Submit </button>
        </form>
    </section>
    )
}
