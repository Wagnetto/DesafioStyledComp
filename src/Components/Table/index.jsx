import React from "react";
import styled from "styled-components";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";
import { fonteSimples } from "../UI/variaveis";

const StyledTable = styled.table`
    font-family: ${fonteSimples};
    width: 100%;
    text-align: left;
    line-height: 2.5rem;
`

const Tabela = () => {
    return(
        <StyledTable>
            <TableHeader />
            <TableBody />
        </StyledTable>
    )
};

export default Tabela;