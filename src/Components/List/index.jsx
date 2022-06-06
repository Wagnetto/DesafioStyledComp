import React from "react";
import styled from "styled-components";
import Tabela from "../Table";
import TituloTabela from "../Title";


const StyledList = styled.div`
    margin:  0.5rem 1rem;
    padding: 0.5rem 1rem;    
`

const ListContainer = () => {
    return(
        <StyledList>
            <TituloTabela />
            <Tabela />             
        </StyledList>
    )
};

export default ListContainer;