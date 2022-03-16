import { Align, TableColumn } from './interface';
import Css from './table.module.css';

export const __CONFIGS: Record<Align, string> = {
  left: Css.align_left,
  center: Css.align_center,
  right: Css.align_right,
};

export const getClass = <T>(param: TableColumn<T>): string => {
  const classes = [__CONFIGS[param.align ?? 'left']];
  if (param.className) classes.push(param.className);
  return classes.join(' ');
};
