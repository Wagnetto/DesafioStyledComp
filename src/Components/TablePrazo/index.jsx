import React from 'react';
import styled from 'styled-components';

const StyledData = styled.td`
  display: flex;
  justify-content: space-around;
  font-weight: bolder;
  color: ${(props) =>
    props.cor === 'red' ? 'red' : props.cor === 'yellow' ? '#fad02c' : props.cor === 'green' ? 'green' : ''};
`;

const TablePrazo = ({ tempo }) => {
  let cor = '';
  if (tempo <= 0) {
    cor = 'red';
  }
  if (tempo > 0 && tempo < 10) {
    cor = 'yellow';
  }
  if (tempo > 10) {
    cor = 'green';
  }
  return (
    <StyledData cor={cor}>
      <p>&#9679;</p>
      <span>{tempo}</span>min<span>❯</span>
    </StyledData>
  );
};

export default TablePrazo;
