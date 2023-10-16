import { Header } from "../../components/Header";
import {Column, Container, Title, TitleHighLight} from './feed-styles';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';


const Feed = () => {
    return(<>
        <Header auth={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>

            <Column flex={1}>
                <TitleHighLight>RANKING 5 TOP DA SEMANA</TitleHighLight>
                <UserInfo percentual={95} name="Gabriel Cabeceira" image="https://avatars.githubusercontent.com/u/108899485?v=4" />
                <UserInfo percentual={87} name="Gabriel Cabeceira" image="https://avatars.githubusercontent.com/u/108899485?v=4" />
                <UserInfo percentual={65} name="Gabriel Cabeceira" image="https://avatars.githubusercontent.com/u/108899485?v=4" />
                <UserInfo percentual={45} name="Gabriel Cabeceira" image="https://avatars.githubusercontent.com/u/108899485?v=4" />
                <UserInfo percentual={36} name="Gabriel Cabeceira" image="https://avatars.githubusercontent.com/u/108899485?v=4" />
            </Column>

        </Container>

    </>)
}

export { Feed }