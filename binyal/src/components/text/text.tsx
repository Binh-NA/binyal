import React from 'react';
import { ByElement } from '../../common/by-element';
import Css from './text.module.css';

export interface TextProps extends ByElement {
  // properties
  className?: string;
  tabIndex?: string;
  // css
  fill?: boolean;
  highlight?: boolean;
  code?: boolean;
  underline?: boolean;
  delete?: boolean;
  strong?: boolean;
  italic?: boolean;
  //
  children: React.ReactNode;
}

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
  highlight: {
    flat: Css.flat_highlight,
    primary: Css.primary_highlight,
    warning: Css.warning_highlight,
    danger: Css.danger_highlight,
  },
  code: {
    flat: Css.flat_code,
    primary: Css.primary_code,
    warning: Css.primary_cde,
    danger: Css.danger_code,
  },
};

const getClass = (props: TextProps): string => {
  const classes: string[] = [
    Css.t,
    configClass.size[props.size ?? 'medium'],
    configClass.style[props.style ?? 'primary'],
  ];
  if (props.fill) classes.push(Css.fill);
  if (props.highlight)
    classes.push(configClass.highlight[props.style ?? 'primary']);
  if (props.code) classes.push(configClass.code[props.style ?? 'primary']);
  if (props.underline) classes.push(Css.underline);
  if (props.delete) classes.push(Css.delete);
  if (props.className) classes.push(props.className);
  return classes.join(' ');
};

const Text = (props: TextProps): React.ReactElement => {
  let children = props.children;
  if (props.italic) {
    children = <i>{children}</i>;
  }
  if (props.strong) {
    children = <strong>{children}</strong>;
  }
  return <span className={getClass(props)}>{children}</span>;
};

Text.size = ByElement.size;
Text.Style = ByElement.style;

export default Text;
