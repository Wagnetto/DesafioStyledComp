import React from 'react';
import styled from 'styled-components';
import { listaDePedidos } from '../../info';
import TableRow from '../TableRow/index.tsx';
import { fonteSimples } from '../UI/variaveis';

const StyledBody = styled.tbody`
  font-family: ${fonteSimples};
`;

const TableBody = () => {
  const { pedidos } = listaDePedidos;
  return (
    <StyledBody>
      {pedidos.map((pedido) => {
        return <TableRow key={pedido.id} pedido={pedido} />;
      })}
    </StyledBody>
  );
};

export default TableBody;
