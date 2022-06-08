import styled, { css } from 'styled-components';
import { Cor } from '../../types/cor';

type StyledDataProps = {
  cor: Cor;
};

const StyledDataModifiers = {
  red: css`
    color: red;
  `,
  yellow: css`
    color: #fad02c;
  `,
  green: css`
    color: green;
  `,
};

export const StyledData = styled.td<StyledDataProps>`
  ${({ cor }) => css`
    display: flex;
    justify-content: space-around;
    font-weight: bolder;
    ${StyledDataModifiers[cor]}
  `}
`;
