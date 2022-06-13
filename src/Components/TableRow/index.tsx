import React from "react";
import { Pedido } from "../../types/pedido";
import TablePrazo from "../TablePrazo";
import * as S from './styles';


type TableRowProps = {
  pedido: Pedido
}

const TableRow = ({ pedido } : TableRowProps) => {
  const { id, status, statusTempo, praca, tempo } = pedido;

  return (
    <S.StyledRow>
      <td>{id}</td>
      <td>{status}</td>
      <td>{statusTempo}</td>
      <td>{praca}</td>
      <TablePrazo tempo={tempo} />
    </S.StyledRow>
  );
};

export default TableRow;
