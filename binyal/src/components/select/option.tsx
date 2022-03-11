import React from 'react';
import Css from './select.module.css';

export interface Option<T> {
  key: string;
  value: T;
  name: string;
  disable?: boolean;
}

export interface OptionProps<T> {
  value?: T | T[];
  option: Option<T>;
  isMultiple?: boolean;
  setValue: (value: T | T[]) => void;
}

const getOptionClass = <T,>(props: OptionProps<T>, isChecked: boolean) => {
  const classes: string[] = [Css.o];
  if (isChecked) classes.push(Css.selected);
  if (props.isMultiple) classes.push(Css.o_multiple);
  if (props.option.disable) classes.push(Css.o_disable);
  return classes.join(' ');
};

export const Option = <T,>(props: OptionProps<T>): React.ReactElement => {
  const isChecked = React.useMemo((): boolean => {
    if (!props.isMultiple) {
      return props.value === props.option.value;
    }
    return [...((props.value as T[] | undefined) ?? [])].includes(
      props.option.value,
    );
  }, [props.value, props.option]);

  const onClick =
    (param: T) =>
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>): undefined => {
      e.preventDefault();
      if (!props.isMultiple) {
        props.setValue(param);
        return;
      }

      const nValue = [...((props.value as T[] | undefined) ?? [])];
      if (!isChecked) {
        nValue.push(param);
        props.setValue(nValue);
        return;
      }

      const index = nValue.findIndex((item) => item === param);
      if (index > -1) {
        nValue.splice(index, 1);
      }
      props.setValue(nValue);
    };

  return (
    <div
      className={getOptionClass(props, isChecked)}
      role="button"
      onClick={onClick(props.option.value)}
    >
      {props.option.name}
      {props.isMultiple && isChecked && (
        <span className={Css.checked}>{' ✓'}</span>
      )}
    </div>
  );
};

export const MemoizedOption = React.memo(Option) as typeof Option;
