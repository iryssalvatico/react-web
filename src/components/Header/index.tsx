import * as S from "./styles"
import logo from "../../assets/LOGO.svg"


const Header = () => {
    return (
        <S.Header>
         <picture>
            <img src = {logo} alt="logo"/>  
        </picture>
        <ul>
            
                <li> <S.A href ="gênero" target="_self">
                 Gênero: Romance </S.A>
                </li>
                <li><S.A href ="autores" target="_self">
                 Autora: Kiera Cass </S.A>
                </li>
                 <li id="lipesquiseaqui">
                 <a href=" ">Pesquise aqui </a>
                 </li>
            
        </ul>
        </S.Header>
    )
}

export default Header