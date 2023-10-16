import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import Banner from '../../assets/banner.png'
import { Container, TextContent, Title, TitleHighLight} from './home-styles'


const Home = () => {

    const naviagte = useNavigate();

    const handleClickSignIn = () => {
        naviagte('/login')
    }

    return(<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                        Implemente
                    <br/>
                    </TitleHighLight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profisional, evoluindo em comunidade com os experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
            </div>

            <div>
                <img src={Banner} alt="banner" />
            </div>
        </Container>

    </>)
}

export { Home }