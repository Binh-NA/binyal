import React from 'react';
import { getClass } from './config-class';
import { TableColumn } from './interface';

export interface TableBodyProps<T> {
  columns: TableColumn<T>[];
  rows?: T[];
  styles?: React.CSSProperties[];
  borders?: React.CSSProperties[];
  rowKey?: (row: T, index: number) => string;
}

const Cell = <T,>(props: {
  col: TableColumn<T>;
  row: T;
  index: number;
  style?: React.CSSProperties;
}): React.ReactElement => {
  return (
    <td className={getClass(props.col)} style={props.style}>
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
  styles?: React.CSSProperties[];
  borders?: React.CSSProperties[];
}): React.ReactElement => (
  <tr>
    {props.cols.map((col, i) => (
      <Cell<T>
        key={col.name ?? i.toString()}
        row={props.row}
        col={col}
        index={props.index}
        style={{ ...props.styles?.[i], ...props.borders?.[i] }}
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
        <Row<T>
          key={props.rowKey?.(row, i) ?? i.toString()}
          row={row}
          cols={props.columns}
          index={i}
          styles={props.styles}
          borders={props.borders}
        />
      ))}
    </tbody>
  ) : (
    <BodyEmpty totalCols={props.columns.length} />
  );
};
