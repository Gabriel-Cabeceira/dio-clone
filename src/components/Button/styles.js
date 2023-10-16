import { styled, css } from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px; // Corrigido de 'border-radious' para 'border-radius'
    position: relative;  // Corrigido de 'posiltion' para 'position'

    color: #fff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;  // Adicionado ponto e vírgula no final

    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;

        background: #e4105d;

        &::after{
            content: '';
            position: absolute;
            border: 1px solid #e4105d; // Adicionado ponto e vírgula no final
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px; // Corrigido de 'border-radious' para 'border-radius'
        }
    `}
`;
