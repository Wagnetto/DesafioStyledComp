import React from "react";
import styled from "styled-components";
import filtro from "../../assets/filtro.png"
import search from "../../assets/search.png";
import { fonteSimples } from "../UI/variaveis";

const StyledFilter = styled.section`
    margin: 0.5rem 1rem;
    display: flex;    
    font-family: ${fonteSimples};
    padding: 1rem;

    input {
        background: url('${search}') no-repeat 8px 15px;
        padding: 0px 30px;        
        width: 30%;        
        border-radius: 6px;
        border: 2px solid #f1f1f1;
    }
    
    button {
        padding: 12px 12px;
        margin-left: 10px;
        font-size: 14px;
        border-radius: 6px;
        border: 2px solid #f0f0f0;
        background-color: #ffffff;
        
        img {
            margin-left: 10px;
        }
    }
`


const FiltroContainer = () => {
    return (
        <StyledFilter>
            <input
                type="search"
                id="search"                                                               
                placeholder="Buscar por número do pedido"
            />
            <button> 
                Filtros
                <img src={filtro} alt="Filtro de Busca" />
            </button>
        </StyledFilter>
    )
};

export default FiltroContainer;
