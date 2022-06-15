import React from 'react';
import * as S from './styles';
//import setaParaBaixo from '../../assets/chevron-down.png';

const TableHeader = () => (
  <S.StyledTableHeader>
    <tr>
      <th>Número do pedido</th>
      <th>Status do pedido</th>
      <th>
        Tempo no status
        <img src={setaParaBaixo} alt="seta para baixo"></img>
      </th>
      <th>Praça</th>
      <S.ColunaPedidos>
        Pedidos
        <img src={setaParaBaixo} alt="seta para baixo"></img>
      </S.ColunaPedidos>
    </tr>
  </S.StyledTableHeader>
);
export default TableHeader;
