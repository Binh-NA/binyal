import React from 'react';
import { ByElement } from '../../common/by-element';
import Loading from '../loading';
import InputCss from './input.module.css';

type InputType =
  | 'email'
  | 'hidden'
  | 'number'
  | 'password'
  | 'search'
  | 'text'
  | 'url';
type InputAutoComplete = 'on' | 'off';

export interface InputProps extends ByElement {
  // properties
  id?: string;
  name?: string;
  className?: string;
  type?: InputType;
  disabled?: boolean;
  tabIndex?: number;
  maxLength?: number;
  minLength?: number;
  autoFocus?: boolean;
  autoComplete?: InputAutoComplete;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  value?: string;
  defaultValue?: string;
  //content
  loading?: boolean;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  // css
  fill?: boolean;
  // events
  setValue?: (value?: string) => void | Promise<void>;
  onEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

const configContentClass = {
  size: {
    large: InputCss.content_large,
    medium: InputCss.content_medium,
    small: InputCss.content_small,
  },
};

const configClass = {
  size: {
    large: InputCss.large,
    medium: InputCss.medium,
    small: InputCss.small,
  },
  style: {
    flat: InputCss.flat,
    primary: InputCss.primary,
    warning: InputCss.warning,
    danger: InputCss.danger,
  },
};

const getContentClass = (props: InputProps): string => {
  const classes: string[] = [
    InputCss.content,
    configContentClass.size[props.size ?? 'medium'],
  ];
  if (props.fill) classes.push(InputCss.fill);
  if (props.iconLeft) classes.push(InputCss.content_left);
  if (props.iconRight) classes.push(InputCss.content_right);
  return classes.join(' ');
};

const getClass = (props: InputProps): string => {
  const classes: string[] = [
    InputCss.i,
    configClass.size[props.size ?? 'medium'],
    configClass.style[props.style ?? 'primary'],
  ];
  if (props.fill) classes.push(InputCss.fill);
  if (props.className) classes.push(props.className);
  return classes.join(' ');
};

const InputContent = (props: InputProps): React.ReactElement => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e && e.target) props?.setValue?.(e.target.value);
    props?.onChange?.(e);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const code = e.keyCode || e.which;
    if (code === 13) props?.onEnter?.(e);
    props?.onKeyPress?.(e);
  };

  return (
    <input
      id={props.id}
      name={props.name}
      className={getClass(props)}
      type={props.type}
      disabled={props.disabled}
      tabIndex={props.tabIndex}
      maxLength={props.maxLength}
      minLength={props.minLength}
      autoFocus={props.autoFocus}
      autoComplete={props.autoComplete}
      placeholder={props.placeholder}
      readOnly={props.readOnly || props.loading}
      required={props.required}
      value={props.value}
      defaultValue={props.defaultValue}
      onChange={onChange}
      onKeyPress={onKeyPress}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
    />
  );
};

export const Input = (props: InputProps): React.ReactElement => {
  const isSign = !(props.loading || props.iconLeft || props.iconRight);
  return isSign ? (
    <InputContent {...props} />
  ) : (
    <div className={getContentClass(props)}>
      <InputContent {...props} />
      {props.iconLeft && (
        <span className={InputCss.icon_left}>{props.iconLeft}</span>
      )}
      {props.iconRight && (
        <span className={InputCss.icon_right}>{props.iconRight}</span>
      )}
      {props.loading && <Loading style={props.style} />}
    </div>
  );
};

Input.size = ByElement.size;
Input.style = ByElement.style;
Input.type = {
  email: 'email' as InputType,
  hidden: 'hidden' as InputType,
  number: 'number' as InputType,
  password: 'password' as InputType,
  search: 'search' as InputType,
  text: 'text' as InputType,
  url: 'url' as InputType,
};
Input.autoComplete = {
  on: 'on' as InputAutoComplete,
  off: 'off' as InputAutoComplete,
};

export default Input;
