import * as S from "./styles"
import livro9 from "../../assets/LIVRO 9.svg"
import livro10 from "../../assets/LIVRO 10.svg"
import livro11 from "../../assets/LIVRO 11.svg"
import livro12 from "../../assets/LIVRO 12.svg"
import livro13 from "../../assets/LIVRO 13.svg"
import anuncio from "../../assets/ANÚNCIO.svg"
import { Link } from "react-router-dom"


const Body3 = () => {
    return (
        <S.Body>
         <nav className="fundo">
            <section>
                <p id="p1">Autora: Kiera Cass</p>
            </section>
            <section className="livros">
                <Link to="/livro9"> 
                <img className ="livro9" src = {livro9} alt="livro 9"/>  
                <img className ="livro10" src = {livro10} alt="livro 10"/>  
                <img className ="livro11" src = {livro11} alt="livro 11"/>
                <img className ="livro12" src = {livro12} alt="livro 12"/>  
                <img className ="livro13" src = {livro13} alt="livro 13"/>  
                <img className ="anuncio" src = {anuncio} alt="anuncio"/>
                </Link>

            </section>
        </nav>

        </S.Body>
    )
}

export default Body3