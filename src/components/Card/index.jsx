import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture} from './card-styles';
import { FiThumbsUp } from 'react-icons/fi';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://www.alura.com.br/artigos/assets/react-js/react-js.jpg'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/108899485?v=4' />
                <div>
                    <h4>Gabriel Cabeceira</h4>
                    <p>Há 25 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de React</h4>
                <p>Projeto realizado no curso de React da DIO... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript #React</h4>
                <p>
                    <FiThumbsUp />2689
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }