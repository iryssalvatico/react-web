import * as S from "./styles"
import livro4 from "../../assets/LIVRO 4.svg"
import livro5 from "../../assets/LIVRO 5.svg"
import livro6 from "../../assets/LIVRO 6.svg"
import livro7 from "../../assets/LIVRO 7.svg"
import livro8 from "../../assets/LIVRO 8.svg"
import anuncio from "../../assets/ANÚNCIO.svg"


const Body2 = () => {
    return (
        <S.Body2>
         <nav className="fundo">
            <section>
                <p id="p1">Gênero: Romance</p>
            </section>
            <section className="livros">
                <img className ="livro4" src = {livro4} alt="livro 4"/>  
                <img className ="livro5" src = {livro5} alt="livro 5"/>  
                <img className ="livro6" src = {livro6} alt="livro 6"/>
                <img className ="livro7" src = {livro7} alt="livro 7"/>  
                <img className ="livro8" src = {livro8} alt="livro 8"/>  
                <img className ="anuncio" src = {anuncio} alt="anuncio"/>
            </section>
        </nav>
        
        </S.Body2>
    )
}

export default Body2