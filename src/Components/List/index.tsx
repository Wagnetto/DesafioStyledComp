import React from "react";
import Tabela from "../Table";
import TituloTabela from "../Title";
import * as S from "./styles";




const ListContainer = () => {
    return(
        <S.StyledList>
            <TituloTabela />
            <Tabela />
        </S.StyledList>
    )
};

export default ListContainer;
