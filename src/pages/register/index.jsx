import {MdEmail, MdLock, MdPerson} from 'react-icons/md'
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import {Column, Container, SubTitleLogin, Title, TitleLogin, Wrapper, SimpleText, AlreadyRegistered, ClickLogin} from './register-styles';
import {Input} from '../../components/Input';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object({
    completeName: yup.string().required('Campo obrigatório'),
    email: yup.string().email('* Email não é válido').required('* Campo obrigatório'),
    password: yup.string().min(3, '* Senha inválida, digite no mínimo 3 caracteres').required('* Campo obrigatório')
}).required();



const Register = () => {

    const {control, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });


    const onSubmit = async formData => {
        try {
            const data = {
                name: formData.completeName,
                email: formData.email,
                password: formData.password
            };
            
            console.log(data); // Exibe o objeto de dados no console
        } catch (error) {
            console.error('Ocorreu um erro:', error);
        }
    };
    



    return(<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>

            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="completeName" errorMessage={errors?.email?.message} control={control} placeholder="Nome Completo" type="text" leftIcon={<MdPerson />}/>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" type="email" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Criar minha conta" variant="secondary" type='submit'/>
                    </form>
                    <Column>
                        <SimpleText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SimpleText>
                        <AlreadyRegistered>Já tenho uma conta. <ClickLogin href="/login">Fazer login</ClickLogin> </AlreadyRegistered>
                    </Column>
                </Wrapper>
            </Column>
        </Container>

    </>)
}

export { Register }