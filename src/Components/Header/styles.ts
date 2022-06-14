import styled from 'styled-components';
import { fonteSimples, fonteTitulos } from '../UI/variaveis';

export const StyledHeader = styled.header`
  margin: 0.5rem 1rem;
  padding: 0.5rem 1rem;
  h1 {
    font-family: ${fonteTitulos};
  }
  p {
    font-family: ${fonteSimples};
    font-weight: bold;
  }
`;
