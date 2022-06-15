import { Pedido } from './types/pedido';

export const listaDePedidos: Pedido[] = [
  {
    id: 1001,
    status: 'DCL - em direção ao Cliente',
    statusTempo: '25 min',
    praca: 'São Paulo',
    tempo: 9,
  },
  {
    id: 1002,
    status: 'DCL - em direção ao Cliente',
    statusTempo: '30 min',
    praca: 'São Paulo',
    tempo: 15,
  },
  {
    id: 1003,
    status: 'DRE - em direção ao restaurante',
    statusTempo: '10 min',
    praca: 'São Paulo',
    tempo: 7,
  },
  {
    id: 1004,
    status: 'DRE - em direção ao restaurante',
    statusTempo: '10 min',
    praca: 'Belzonte',
    tempo: 6,
  },
  {
    id: 1005,
    status: 'DCL - em direção ao Cliente',
    statusTempo: '20 min',
    praca: 'São Paulo',
    tempo: 12,
  },
  {
    id: 1006,
    status: 'NCL - no cliente',
    statusTempo: '10 min',
    praca: 'São Paulo',
    tempo: 5,
  },
  {
    id: 1007,
    status: 'NRE - no restaurante',
    statusTempo: '10 min',
    praca: 'São Paulo',
    tempo: 0,
  },
];
