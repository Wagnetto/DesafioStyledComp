import React from "react";
import styled from "styled-components";
import { fonteTitulos } from "../UI/variaveis";

const StyledTitulo = styled.h2`
     font-family: ${fonteTitulos};
     margin-bottom: 1.5rem;
`

const TituloTabela = () => {
    return(
        <StyledTitulo>
            Lista de Pedidos em andamento
        </StyledTitulo>
    )
};

export default TituloTabela;