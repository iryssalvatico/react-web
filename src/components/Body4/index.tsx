import * as S from "./styles"
import livro14 from "../../assets/LIVRO14.svg"
import anuncio from "../../assets/ANÚNCIO.svg"

const Body4 = () => {
    return (
        <S.Body4>
         <nav className="fundo">
            <h1>A Seleção-Kiera Cass</h1>
            
            <p>Para trinta e cinco garotas, a “Seleção” é a chance de uma vida. Num futuro em que os Estados Unidos deram lugar ao Estado Americano da China e mais recentemente a Illéa, um país jovem com uma sociedade dividida em castas, a competição que reúne moças de dezesseis e vinte anos de todas as partes para decidir quem se casará com o príncipe é a oportunidade de escapar de uma realidade imposta a elas ainda no berço. É a chance de ser alçada de um mundo de possibilidades reduzidas para um mundo de vestidos deslumbrantes e joias valiosas. De morar em um palácio, conquistar o coração do belo príncipe Maxon e um dia ser a rainha. Para America Singer, no entanto, uma artista da casta Cinco, estar entre as Selecionadas é um pesadelo. Significa deixar para trás Aspen, o rapaz que realmente ama e que está uma casta abaixo dela. Significa abandonar sua família e seu lar para entrar em uma disputa ferrenha por uma coroa que ela não quer. E viver em um palácio sob a ameaça constante de ataques rebeldes. Então America conhece pessoalmente o príncipe. Bondoso, educado, engraçado e muito, muito charmoso, Maxon não é nada do que se poderia esperar. Eles formam uma aliança, e, aos poucos, America começa a refletir sobre tudo o que tinha planejado para si mesma — e percebe que a vida com que sempre sonhou talvez não seja nada comparada ao futuro que ela nunca tinha ousado imaginar.</p>
         
            <img  src = {livro14} alt="livro 14"/>
            <img  src = {anuncio} alt="anuncio"/>
            </nav>
        </S.Body4>
    )
}

export default Body4
