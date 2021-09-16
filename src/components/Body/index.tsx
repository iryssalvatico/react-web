export const Body = styled.body
    background-image: url("${bgPag1}");
    width: 100%;
    height: 50rem;
 nav{
    display: flex;
    flex-direction: column;
    align-items: center;
    section p{
    margin: 2rem;
    background-color: #DAFAD3;
    text-align: center;
    font-size: 2rem;
    font-family: 'Old Standard TT';
    
}
  
  
import * as S from "./styles"
import livro1 from "../../assets/LIVRO 1.svg"
import livro2 from "../../assets/LIVRO 2.svg"
import livro3 from "../../assets/LIVRO 3.svg"
import anuncio from "../../assets/ANÚNCIO.svg"

const Body = () => {
    return (
        <S.Body>
         <nav>
            <section>
                <p id="p1">Sem ideia de livros? Leia as resenhas  e mergulhe na vida literária!</p>
                <p id="p1">Favoritos do Público</p>
            </section>
            <section className="livros">
                <img  src = {livro1} alt="livro 1"/>
                <img  src = {livro2} alt="livro 2"/>
                <img  src=  {livro3} alt="livro 3"/>
                <img  src = {anuncio} alt="anuncio"/>

            </section>
        </nav>

        </S.Body>
    )
}

export default Body
