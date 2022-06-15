import React from 'react';
import * as S from './styles';
import { listaDePedidos } from '../../info';
import TableRow from '../TableRow';

const TableBody = () => (
  <S.StyledBody>
    {listaDePedidos.map((pedido) => (
      <TableRow key={pedido.id} pedido={pedido} />
    ))}
  </S.StyledBody>
);

export default TableBody;
