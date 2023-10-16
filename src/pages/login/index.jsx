import { useNavigate } from "react-router-dom";
import {MdEmail, MdLock} from 'react-icons/md'
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import {Column, Container, CreateText, ForgotText, Row, SubTitleLogin, Title, TitleLogin, Wrapper, InvalidData} from './login-styles';
import {Input} from '../../components/Input';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api'
import { useState } from "react";

const schema = yup.object({
    email: yup.string().email('* Email não é válido').required('* Campo obrigatório'),
    password: yup.string().min(3, '* Senha inválida, digite no mínimo 3 caracteres').required('* Campo obrigatório')
}).required();


const Login = () => {

    const naviagte = useNavigate();

    const [invalidData, setInvalidData] = useState(false);

    const {control, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });


    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&password=${formData.password}`);
            if (data.length === 1){
                naviagte('/feed');
            } else {
                setInvalidData(true);
            }
        }catch{
            alert('Houve um erro, tente novamente')
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
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    {invalidData === true? <InvalidData>Email ou senha inválidos</InvalidData>: null}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" type="email" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Entrar" variant="secondary" type='submit'/>
                    </form>
                    <Row>
                        <ForgotText>Esqueci minha senha</ForgotText>
                        <CreateText>Criar conta</CreateText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>

    </>)
}

export { Login }