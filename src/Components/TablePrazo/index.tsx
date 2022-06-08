import React from 'react';
import { Cor } from '../../types/cor';
import * as S from './styles';

type TablePrazoProps = {
  tempo: number,
}

const TablePrazo = ({ tempo }: TablePrazoProps) => {
  let cor: Cor = 'red'
  if (tempo > 0 && tempo < 10) {
    cor = 'yellow';
  }
  if (tempo > 10) {
    cor = 'green';
  }
  return (
    <S.StyledData cor={cor}>
      <p>&#9679;</p>
      <span>{tempo}</span>min<span>❯</span>
    </S.StyledData>
  );
};

export default TablePrazo;
