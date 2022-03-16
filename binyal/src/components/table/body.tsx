import React from 'react';
import { getClass } from './config-class';
import { TableColumn } from './interface';

export interface TableBodyProps<T> {
  columns: TableColumn<T>[];
  rows?: T[];
}

const Cell = <T,>(props: {
  col: TableColumn<T>;
  row: T;
  index: number;
}): React.ReactElement => {
  return (
    <td className={getClass(props.col)}>
      {typeof props.col.render === 'function'
        ? props.col.render(props.row, props.index)
        : props.row[props.col.render]}
    </td>
  );
};

const Row = <T,>(props: {
  cols: TableColumn<T>[];
  row: T;
  index: number;
}): React.ReactElement => (
  <tr>
    {props.cols.map((col, i) => (
      <Cell<T>
        key={i.toString()}
        row={props.row}
        col={col}
        index={props.index}
      />
    ))}
  </tr>
);

const BodyEmpty = (props: { totalCols: number }): React.ReactElement => (
  <tr>
    <td colSpan={props.totalCols}></td>
  </tr>
);

export const TableBody = <T,>(props: TableBodyProps<T>): React.ReactElement => {
  return props.rows && props.rows.length > 0 ? (
    <tbody>
      {props.rows.map((row, i) => (
        <Row<T> key={i.toString()} row={row} cols={props.columns} index={i} />
      ))}
    </tbody>
  ) : (
    <BodyEmpty totalCols={props.columns.length} />
  );
};
