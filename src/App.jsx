import { useState } from 'react'
import Banner from './components/Banner'
import Livro from './components/Livro'
import Galeria from './components/Galeria'
import Header from './components/Header'
import Footer from './components/Footer'

import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return(
    <main>
      <Header />
      <Banner />
      <Livro 
      titulo = {"O Cavaleiro Fantasma"}
      autor = {"Cornelia Funke"}
      ano = {"25 de fevereiro de 2013"}
      sinopse = {"Jon não ficou nada feliz ao ser enviado para o internato. A situação se complica quando fantasmas assustadores começam a persegui-lo, e ninguém parece acreditar nessas aparições. Com a ajuda de uma nova amiga, a corajosa Ella, Jon terá que desvendar segredos enterrados há muitos séculos e, para isso, precisará da proteção de um generoso cavaleiro medieval."}
      />
      <Galeria />
      <Footer />
    </main>
  )
}
export default App
