import "./card.css"

export default function Card(){
    return(
        <div className="card">
            <img src="https://static.wikia.nocookie.net/jujutsu-kaisen/images/0/0e/Volume_1.png/" alt="manga cover image"></img>
            <ul >
                <li><h1>Name: Jujutsu Kaisen</h1></li>
                <li><h2>Author: Gege Akutami</h2></li>
                <li><h4>Release year: 2018 </h4></li>
                <li><h4>Chapters: 238 </h4></li>
                <button>Add</button>
                <li><h4>Chapters Read: 238 </h4></li>
                <button>Add</button>
            </ul>
        </div>
    )
}

