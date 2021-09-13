import * as S from "./styles"


const Header = () => {
    return (
        <S.Header>
        
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