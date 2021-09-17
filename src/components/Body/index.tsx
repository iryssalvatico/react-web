import * as S from "./styles"
import livro1 from "../../assets/LIVRO 1.svg"
import livro2 from "../../assets/LIVRO 2.svg"
import livro3 from "../../assets/LIVRO 3.svg"
import anuncio from "../../assets/ANÚNCIO.svg"

const Body = () => {
    return (
        <S.Body>
         <nav className="fundo">
            <section>
                <p id="p1">Sem ideia de livros? Leia as resenhas  e mergulhe na vida literária!</p>
                <p id="p1">Favoritos do Público</p>
            </section>
            <section className="livros">
                <img className="livro1" src = {livro1} alt="livro 1"/>  
                <img className="livro2" src = {livro2} alt="livro 2"/>  
                <img className="livro3" src=  {livro3} alt="livro 3"/>
                <img className="anuncio" src = {anuncio} alt="anuncio"/>
                 
            </section>
        </nav>
        
        </S.Body>
    )
}

export default Body
