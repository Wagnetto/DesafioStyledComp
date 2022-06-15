import React from 'react';
import * as S from './styles';
import filtro from '../../assets/filtro.png';


const FiltroContainer = () => {
  return (
    <S.StyledFilter>
      <input type="search" id="search" placeholder="Buscar por número do pedido" />
      <button>
        Filtros
        <img src={filtro} alt="Filtro de Busca" />
      </button>
    </S.StyledFilter>
  );
};

export default FiltroContainer;
