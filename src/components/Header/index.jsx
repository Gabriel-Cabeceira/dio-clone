import { Button } from '../Button';
import {BuscarInputContainer, Container, Input, Menu, MenuRight, Row, Wrapper, Logo, UserPicture} from './styles';
import logo from '../../assets/logo-dio.svg';
import { Link } from "react-router-dom";

const Header = ({auth}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <Logo src={logo} />
                {auth ? (<>               
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>
                ): null}
            </Row>

            <Row>
                {auth ? (<>
                    <UserPicture src="https://avatars.githubusercontent.com/u/108899485?v=4" />
                </>): (<>                
                <Link to={'/'}><MenuRight href='#'>Home</MenuRight></Link>
                <Link to={'/login'}><Button title='Entrar'/></Link>
                <Link to={'/register'}><Button title='Cadastrar'/></Link>
                </>)}
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header}