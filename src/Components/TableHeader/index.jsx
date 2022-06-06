import React from "react";
import styled from "styled-components";
import { fonteSimples } from "../UI/variaveis";
import setaParaBaixo from "../../assets/chevron-down.png"

const StyledTableHeader = styled.thead`
    font-family: ${fonteSimples};
    font-weight: bolder;
    

    th > img {
        margin-left: 5px;
        margin-bottom: -8px;
    }    
    
`

const ColunaPedidos = styled.th`
    text-align: center;
`

const TableHeader = () => {
    return(
        <StyledTableHeader>
            <tr>
                <th>Número do pedido</th>
                <th>Status do pedido</th>
                <th>
                    Tempo no status
                    <img src={setaParaBaixo} alt="seta para baixo"></img>
                </th>
                <th>Praça</th>
                <ColunaPedidos>
                    Pedidos
                    <img src={setaParaBaixo} alt="seta para baixo"></img>
                </ColunaPedidos>
            </tr>
        </StyledTableHeader>
    )
};

export default TableHeader;