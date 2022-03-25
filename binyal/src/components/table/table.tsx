import React from 'react';
import { TableProps } from './interface';
import { TableHeader } from './header';
import { TableBody } from './body';
import Css from './table.module.css';
import CssScroll from '../../common/scroll.module.css';
import { useResizeWidth } from '../../hooks/resize';
import { TableContainer, TableContext } from './context';
import { getBorderStyle, getStyle } from './config-class';

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
  const { stickies, setTimeResize, setScroll, timeResize, scroll } =
    React.useContext(TableContext);

  const styles = React.useMemo(() => {
    const colLength = props.columns.length;
    if (Object.keys(stickies ?? {}).length < colLength) return;
    return props.columns.map((item, i) =>
      getStyle(i, colLength, item.fixed, stickies),
    );
  }, [stickies, props.columns]);

  const borderStyles = React.useMemo(() => {
    const colLength = props.columns.length;
    if (Object.keys(stickies ?? {}).length < colLength) return;
    return props.columns.map((item, i) =>
      getBorderStyle(i, colLength, item.fixed, stickies, scroll),
    );
  }, [stickies, scroll, props.columns]);

  useResizeWidth(() => {
    setTimeResize?.(new Date().getTime());
  });

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const scrollRight =
      -1 *
      (e.currentTarget.offsetWidth +
        e.currentTarget.scrollLeft -
        e.currentTarget.scrollWidth);
    setScroll?.({
      left: scrollLeft,
      right: scrollRight < 0 ? 0 : scrollRight,
    });
  };

  const dRef = React.useCallback(
    (node: HTMLDivElement) => {
      if (!node) return;
      const scrollLeft = node.scrollLeft;
      const scrollRight =
        -1 * (node.offsetWidth + node.scrollLeft - node.scrollWidth);
      setScroll?.({
        left: scrollLeft,
        right: scrollRight < 0 ? 0 : scrollRight,
      });
    },
    [timeResize],
  );

  return (
    <div
      ref={dRef}
      className={getClass(props)}
      style={{ maxHeight: props.height ?? 'auto' }}
      onScroll={onScroll}
    >
      <table className={Css.t}>
        <TableHeader
          columns={props.columns}
          styles={styles}
          borders={borderStyles}
        />
        <TableBody
          columns={props.columns}
          rows={props.rows}
          styles={styles}
          borders={borderStyles}
        />
      </table>
    </div>
  );
};

export const TableProvider = <T,>(props: TableProps<T>): React.ReactElement => (
  <TableContainer>
    <Table {...props} />
  </TableContainer>
);

export default TableProvider;
