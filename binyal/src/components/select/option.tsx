import React from 'react';
import Css from './select.module.css';

export interface Option<T> {
  key: string;
  value: T;
  name: string;
  disable?: boolean;
}

export interface OptionProps<T> {
  value?: T;
  option: Option<T>;
  setValue: (value: T) => void;
}

const getOptionClass = <T,>(props: OptionProps<T>) => {
  const classes: string[] = [Css.o];
  if (props.value === props.option.value) classes.push(Css.selected);
  if (props.option.disable) classes.push(Css.o_disable);
  return classes.join(' ');
};

export const Option = <T,>(props: OptionProps<T>): React.ReactElement => {
  return (
    <div
      className={getOptionClass(props)}
      role="button"
      onClick={() => props.setValue(props.option.value)}
    >
      {props.option.name}
    </div>
  );
};
