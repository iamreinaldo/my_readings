import "./form.css"

export default function MangaForm(){
    return(
    <section className="form-container">
        <form className="form">
            <input placeholder="Name"></input>
            <input placeholder="Author"></input>
            <input placeholder="Release Date"></input>
            <input placeholder="Chapters"></input>
            <input placeholder="Chapters Read"></input>
        <button> Submit </button>
        </form>
    </section>
    )
}
