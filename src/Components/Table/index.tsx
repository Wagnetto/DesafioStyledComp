import React from 'react';
import * as S from './styles';
import TableBody from '../TableBody';
import TableHeader from '../TableHeader';

const Tabela = () => (
  <S.StyledTable>
    <TableHeader />
    <TableBody />
  </S.StyledTable>
);
export default Tabela;
