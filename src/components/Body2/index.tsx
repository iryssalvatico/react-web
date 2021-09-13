import * as S from "./styles"
import livro4 from "../../assets/LIVRO 4.svg"
import livro5 from "../../assets/LIVRO 5.svg"
import livro6 from "../../assets/LIVRO 6.svg"
import livro7 from "../../assets/LIVRO 7.svg"
import livro8 from "../../assets/LIVRO 8.svg"
import r1 from "../../assets/Retangle 8.svg"

const Body2 = () => {
    return (
        <S.Body2>
         <nav>
            <section>
                <p id="p1">Gênero: Romance</p>
            </section>
            <section className="livros">

                <img  src = {livro4} alt="livro 4"/>  
                <img  src = {livro5} alt="livro 5"/>  
                <img  src=  {livro6} alt="livro 6"/>
                <img  src = {livro7} alt="livro 7"/>  
                <img  src = {livro8} alt="livro 8"/>  
                
            </section>
        </nav>
        
        </S.Body2>
    )
}

export default Body2