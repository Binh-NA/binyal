import React from 'react';
import { TableProps } from './interface';
import { TableHeader } from './header';
import { TableBody } from './body';
import Css from './table.module.css';
import CssScroll from '../../common/scroll.module.css';

const configClass = {
  size: {
    large: Css.large,
    medium: Css.medium,
    small: Css.small,
  },
  style: {
    flat: Css.flat,
    primary: Css.primary,
    warning: Css.warning,
    danger: Css.danger,
  },
};

const getClass = <T,>(props: TableProps<T>): string => {
  const classes = [
    Css.c,
    CssScroll.scroll_vertical,
    configClass.size[props.size ?? 'medium'],
    configClass.style[props.style ?? 'flat'],
  ];
  if (props.fill) classes.push(Css.fill);
  if (props.striped) classes.push(Css.striped);
  if (props.border) classes.push(Css.border);
  if (props.shadow) classes.push(Css.shadow);
  if (props.className) classes.push(props.className);
  return classes.join(' ');
};

const Table = <T,>(props: TableProps<T>): React.ReactElement => {
  return (
    <div
      className={getClass(props)}
      style={{ maxHeight: props.height ?? 'auto' }}
    >
      <table className={Css.t}>
        <TableHeader columns={props.columns} />
        <TableBody columns={props.columns} rows={props.rows} />
      </table>
    </div>
  );
};

export default Table;
