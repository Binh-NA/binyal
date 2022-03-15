export type Moving = 'start' | 'end';

export type Values = Record<Moving, number>;

export const __MOVING: Record<Moving, Moving> = {
  start: 'start',
  end: 'end',
};
