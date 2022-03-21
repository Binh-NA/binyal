import React from 'react';
import { getClass } from './config-class';
import { TableContext } from './context';
import { TableColumn } from './interface';

export interface TableHeaderProps<T> {
  columns: TableColumn<T>[];
  styles?: React.CSSProperties[];
  borders?: React.CSSProperties[];
}

const Header = <T,>(props: {
  data: TableColumn<T>;
  index: number;
  style?: React.CSSProperties;
}): React.ReactElement => {
  const ref = React.useRef<HTMLTableHeaderCellElement>(null);
  const { setStickies, timeResize } = React.useContext(TableContext);

  React.useEffect(() => {
    if (ref === null || !ref.current) return;
    const bounding = ref.current.getBoundingClientRect();
    setStickies?.(props.index, {
      width: bounding.width,
      isStickyLeft: Boolean(props.data.fixed?.left),
      isStickyRight: Boolean(props.data.fixed?.right),
    });
  }, [ref, props.data, props.index, timeResize]);

  const style = props.style ? { ...props.style } : undefined;
  if (style && style.zIndex) {
    style.zIndex = 1998;
  }

  return (
    <th ref={ref} className={getClass(props.data)} style={style}>
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
          <Header<T>
            key={header.name ?? i.toString()}
            index={i}
            data={header}
            style={{ ...props.styles?.[i], ...props.borders?.[i] }}
          />
        ))}
      </tr>
    </thead>
  );
};
