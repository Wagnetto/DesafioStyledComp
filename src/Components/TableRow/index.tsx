import React from "react";
import styled from "styled-components";
import { Pedido } from "../../types/pedido";
import TablePrazo from "../TablePrazo";
import { fonteSimples } from "../UI/variaveis";

const StyledRow = styled.tr`
  font-family: ${fonteSimples};
`;

type TableRowProps = {
  pedido: Pedido
}

const TableRow = ({ pedido } : TableRowProps) => {
  const { id, status, statusTempo, praca, tempo } = pedido;

  return (
    <StyledRow>
      <td>{id}</td>
      <td>{status}</td>
      <td>{statusTempo}</td>
      <td>{praca}</td>
      <TablePrazo tempo={tempo} />
    </StyledRow>
  );
};

export default TableRow;
