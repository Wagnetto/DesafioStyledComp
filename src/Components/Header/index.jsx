import React from "react";
import styled from "styled-components";
import { fonteTitulos, fonteSimples } from "../UI/variaveis";


const StyledHeader = styled.header`
    margin:  0.5rem 1rem;
    padding: 0.5rem 1rem;
    h1 {
        font-family: ${fonteTitulos};
    }
    p {
        font-family: ${fonteSimples};
        font-weight: bold;
    }
`

const Cabecalho = () => {
    return (
        <StyledHeader>
            <h1>Pedidos</h1>
            <p>Acompanhe e visualize os pedidos da operação</p>
        </StyledHeader>
    )
};

export default Cabecalho;