import React from "react";
import styled from "styled-components";
import TablePrazo from "../TablePrazo";
import { fonteSimples } from "../UI/variaveis";

const StyledRow = styled.tr`
  font-family: ${fonteSimples};
`;

const TableRow = ({ pedido }) => {
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
