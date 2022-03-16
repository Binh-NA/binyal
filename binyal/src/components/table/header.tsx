import React from 'react';
import { getClass } from './config-class';
import { TableColumn } from './interface';

export interface TableHeaderProps<T> {
  columns: TableColumn<T>[];
}

const Header = <T,>(props: {
  data: TableColumn<T>;
  index: number;
}): React.ReactElement => {
  return (
    <th className={getClass(props.data)}>
      {typeof props.data.title === 'function'
        ? props.data.title(props.index, props.data.name)
        : props.data.title}
    </th>
  );
};

export const TableHeader = <T,>(
  props: TableHeaderProps<T>,
): React.ReactElement => {
  return (
    <thead>
      <tr>
        {props.columns.map((header, i) => (
          <Header<T> key={i.toString()} index={i} data={header} />
        ))}
      </tr>
    </thead>
  );
};
