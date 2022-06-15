import styled from 'styled-components';
import { fonteSimples } from '../UI/variaveis';

export const StyledTableHeader = styled.thead`
  font-family: ${fonteSimples};
  font-weight: bolder;

  th > img {
    margin-left: 5px;
    margin-bottom: -8px;
  }
`;

export const ColunaPedidos = styled.th`
  text-align: center;
`;
