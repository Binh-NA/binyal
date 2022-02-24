import React from 'react';
import {
  ByElement,
  AutoComplete,
  withStaticProps,
} from '../../common/by-element';
import Loading from '../loading';
import SelectCss from './select.module.css';
import Icon from '../icon';
import { useRefElement } from '../../hooks/ref';
import { createEvent } from '../../events/event';
import { Option } from './option';
import { Container } from './container';

export interface SelectProps<T> extends ByElement {
  // properties
  id?: string;
  name?: string;
  className?: string;
  disabled?: boolean;
  tabIndex?: number;
  autoFocus?: boolean;
  autoComplete?: AutoComplete;
  placeholder?: string;
  required?: boolean;
  value?: T;
  //content
  loading?: boolean;
  options: Option<T>[];
  // css
  fill?: boolean;
  // events
  setValue?: (value?: T) => void | Promise<void>;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  onFocus?: React.FocusEventHandler<HTMLElement>;
}

export interface SelectStaticProps {
  size: typeof ByElement.size;
  style: typeof ByElement.style;
  autoComplete: typeof ByElement.autoComplete;
}

const __STATIC_PROPS: SelectStaticProps = {
  size: ByElement.size,
  style: ByElement.style,
  autoComplete: ByElement.autoComplete,
};

const configContentClass = {
  size: {
    large: SelectCss.content_large,
    medium: SelectCss.content_medium,
    small: SelectCss.content_small,
  },
};

const configClass = {
  size: {
    large: SelectCss.large,
    medium: SelectCss.medium,
    small: SelectCss.small,
  },
  style: {
    flat: SelectCss.flat,
    primary: SelectCss.primary,
    warning: SelectCss.warning,
    danger: SelectCss.danger,
  },
};

const getContentClass = <T,>(props: SelectProps<T>): string => {
  const classes: string[] = [
    SelectCss.content,
    configContentClass.size[props.size ?? 'medium'],
  ];
  if (props.fill) classes.push(SelectCss.fill);
  if (props.loading) classes.push(SelectCss.c_loading);
  if (props.disabled) classes.push(SelectCss.c_disable);
  return classes.join(' ');
};

const getClass = <T,>(props: SelectProps<T>, isShow: boolean): string => {
  const classes: string[] = [
    SelectCss.s,
    configClass.size[props.size ?? 'medium'],
    configClass.style[props.style ?? 'primary'],
  ];
  if (props.fill) classes.push(SelectCss.fill);
  if (props.className) classes.push(props.className);
  if (isShow) classes.push(SelectCss.show);
  return classes.join(' ');
};

interface SelectContentProps<T> extends SelectProps<T> {
  forwardRef: React.ForwardedRef<HTMLSelectElement>;
}

const SelectContent = <T,>(
  props: SelectContentProps<T>,
): React.ReactElement => {
  return (
    <select
      ref={props.forwardRef}
      id={props.id}
      name={props.name}
      disabled={props.disabled}
      tabIndex={props.tabIndex}
      autoFocus={props.autoFocus}
      autoComplete={props.autoComplete}
      required={props.required}
      value={`${props.value}`}
      onChange={() => console.warn('Binyal not supported')}
    >
      <option value="" disabled>
        Select
      </option>
      {props.options.map((item) => (
        <option key={item.key} value={`${item.value}`}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

const SelectContainer = <T,>(
  props: SelectProps<T>,
  ref?: React.ForwardedRef<HTMLSelectElement>,
) => {
  const sRef = useRefElement<HTMLSelectElement>(ref);
  const dRef = React.useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<T | undefined>(props.value);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsShow(!isShow);
  };

  const customChange = (param?: T) => {
    setValue(param);
    props.setValue?.(param);
    if (sRef.current) sRef.current.value = `${param ?? ''}`;
    const event = createEvent(
      'change',
      sRef,
    ) as React.ChangeEvent<HTMLSelectElement>;
    props.onChange?.(event);
  };

  const onChange = (param?: T) => {
    customChange(param);
    setIsShow((pre) => !pre);
  };

  const onClear = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    customChange(undefined);
  };

  const labelValue = React.useMemo(() => {
    return props.options.find((item) => item.value === value)?.name;
  }, [value, props.options]);

  return (
    <div className={getContentClass(props)} tabIndex={props.tabIndex}>
      <SelectContent {...props} forwardRef={sRef} value={value} />
      <div
        ref={dRef}
        className={getClass(props, isShow)}
        role="button"
        onClick={onClick}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        tabIndex={1}
      >
        <span className={labelValue ? '' : SelectCss.p}>
          {labelValue || props.placeholder || 'Select'}
        </span>
        <span className={SelectCss.appearance}>
          <Icon symbol="arrowDown" />
        </span>
      </div>
      {value && (
        <span className={SelectCss.close} role="button" onClick={onClear}>
          <Icon symbol="close" />
        </span>
      )}
      {props.loading && <Loading style={props.style} />}
      {isShow && (
        <Container<T>
          pRef={dRef}
          options={props.options}
          setValue={onChange}
          onOutSite={setIsShow}
          value={value}
        />
      )}
    </div>
  );
};

const Select = withStaticProps<
  SelectStaticProps,
  SelectProps<string | number | boolean>,
  HTMLSelectElement
>(
  React.forwardRef<HTMLSelectElement, SelectProps<string | number | boolean>>(
    SelectContainer,
  ),
  __STATIC_PROPS,
);

export default Select;
