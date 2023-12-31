import { IconContainer, InputText, InputContainer, ErrorText } from './style';
import { Controller } from 'react-hook-form';


const Input = ({leftIcon, name, control, errorMessage, ...rest}) => {
  return (
    <>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText>: null}
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>): null}
        <Controller 
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest}/>}
        />
    </InputContainer>
    </>
  )
}

export { Input }