import React from "react";

export default function Galeria(){
    return(
        <section className="gallery-container">

            <div className="gallery-1">
            <div className="gallery-image">
                <img src="./src/images/galery/harrypotter.jpg"></img>
                <h3>Harry Potter</h3><p>J. K. Rowling</p>
            </div>

            <div className="gallery-image">
                <img src="./src/images/galery/silvereyes.jpg"></img>
                <h3>FNAF: The Silver Eyes</h3><p>Scott Cawthon</p>
            </div>

            <div className="gallery-image">
                <img src="./src/images/galery/capital.jpg"></img>
                <h3>O Capital</h3><p>Karl Marx</p>
            </div>
            </div>

            <div className="gallery-2">
            <div className="gallery-image">
                <img src="./src/images/galery/sapiens.jpg"></img>
                <h3>Sapiens</h3><p>Yuval Noah Harari</p>
            </div>

            <div className="gallery-image">
                <img src="./src/images/galery/almanaque.jpg"></img>
                <h3>Almanaque da Mônica</h3><p>Mauricio de Souza</p>
            </div>

            <div className="gallery-image">
                <img src="./src/images/galery/python.jpg"></img>
                <h3>Progamando: Python</h3><p>Mark Lutz</p>
            </div>
            </div>
        </section>
    )
}