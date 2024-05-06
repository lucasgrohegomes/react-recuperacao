import React from "react";

export default function Livro({titulo, autor, ano, sinopse}){
    return(
        <section className="book-container">
            <img src="./src/images/cavaleiro-fantasma.jpg"></img>
            <div className="props">
            <h1>{titulo}</h1>
            <h3>{autor}</h3>
            <h4>{ano}</h4>
            <p>{sinopse}</p>
            </div>
        </section>
    )
}