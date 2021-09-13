import * as S from "./styles"
import livro9 from "../../assets/LIVRO 9.svg"
import livro10 from "../../assets/LIVRO 10.svg"
import livro11 from "../../assets/LIVRO 11.svg"
import livro12 from "../../assets/LIVRO 12.svg"
import livro13 from "../../assets/LIVRO 13.svg"
import r1 from "../../assets/Retangle 8.svg"

const Body3 = () => {
    return (
        <S.Body3>
         <nav>
            <section>
                <p id="p1">Autora: Kiera Cass</p>
            </section>
            <section className="livros">

                <img  src = {livro9} alt="livro 9"/>
                <img  src = {livro10} alt="livro 10"/>
                <img  src=  {livro11} alt="livro 11"/>
                <img  src = {livro12} alt="livro 12"/>
                <img  src = {livro13} alt="livro 13"/>


            </section>
        </nav>

        </S.Body3>
    )
}

export default Body3