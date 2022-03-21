import React from 'react';
import type { ByElement } from '../../common/by-element';

export type Title =
  | string
  | React.ReactNode
  | ((index: number, name?: string) => React.ReactElement);

export type Align = 'left' | 'center' | 'right';

export type Fixed = {
  left?: boolean;
  right?: boolean;
};

export interface TableColumn<T> {
  name?: string;
  className?: string;
  align?: Align;
  fixed?: Fixed;
  title: Title;
  render: keyof T | ((row: T, index: number) => React.ReactNode);
}

export interface TableProps<T> extends ByElement {
  // properties
  className?: string;
  height?: string | number;
  striped?: boolean;
  fill?: boolean;
  border?: boolean;
  shadow?: boolean;
  // contents
  rows?: T[];
  columns: TableColumn<T>[];
  // keys
  rowKey?: (row: T, index: number) => string;
}
