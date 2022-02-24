import React from 'react';
import {
  ByElement,
  AutoComplete,
  withStaticProps,
} from '../../common/by-element';
import Loading from '../loading';
import InputCss from './input.module.css';
import { useRefElement } from '../../hooks/ref';

type InputType =
  | 'email'
  | 'hidden'
  | 'number'
  | 'password'
  | 'search'
  | 'text'
  | 'url';

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
  autoComplete?: AutoComplete;
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

const __STATIC = {
  type: {
    email: 'email' as InputType,
    hidden: 'hidden' as InputType,
    number: 'number' as InputType,
    password: 'password' as InputType,
    search: 'search' as InputType,
    text: 'text' as InputType,
    url: 'url' as InputType,
  },
};

export interface InputStaticProps {
  size: typeof ByElement.size;
  style: typeof ByElement.style;
  type: typeof __STATIC.type;
  autoComplete: typeof ByElement.autoComplete;
}

const __STATIC_PROPS: InputStaticProps = {
  size: ByElement.size,
  style: ByElement.style,
  type: __STATIC.type,
  autoComplete: ByElement.autoComplete,
};

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

const InputContent = (
  props: InputProps,
  ref?: React.ForwardedRef<HTMLInputElement>,
): React.ReactElement => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target) props?.setValue?.(e.target.value);
    props?.onChange?.(e);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const code = e.keyCode || e.which;
    if (code === 13) props?.onEnter?.(e);
    props?.onKeyPress?.(e);
  };

  return (
    <input
      ref={ref}
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

const InputContentRef = React.forwardRef<HTMLInputElement, InputProps>(
  InputContent,
);

const IconContainer = (props: {
  children: React.ReactNode;
  isRight?: boolean;
  onClick: () => void;
}): React.ReactElement => (
  <span
    className={props.isRight ? InputCss.icon_right : InputCss.icon_left}
    role="button"
    onClick={() => props.onClick()}
  >
    {props.children}
  </span>
);

const InputContainer = (
  props: InputProps,
  ref?: React.ForwardedRef<HTMLInputElement>,
): React.ReactElement => {
  const iRef = useRefElement<HTMLInputElement>(ref);

  return (
    <div className={getContentClass(props)}>
      <InputContentRef ref={iRef} {...props} />
      {props.iconLeft && (
        <IconContainer onClick={() => iRef.current?.focus()}>
          {props.iconLeft}
        </IconContainer>
      )}
      {props.iconRight && (
        <IconContainer isRight onClick={() => iRef.current?.focus()}>
          {props.iconRight}
        </IconContainer>
      )}
      {props.loading && <Loading style={props.style} />}
    </div>
  );
};

const InputContainerRef = React.forwardRef<HTMLInputElement, InputProps>(
  InputContainer,
);

export const InputRef = (
  props: InputProps,
  ref?: React.ForwardedRef<HTMLInputElement>,
): React.ReactElement => {
  const isSign = !(props.loading || props.iconLeft || props.iconRight);

  return isSign ? (
    <InputContentRef ref={ref} {...props} />
  ) : (
    <InputContainerRef ref={ref} {...props} />
  );
};

const Input = withStaticProps<InputStaticProps, InputProps, HTMLInputElement>(
  React.forwardRef<HTMLInputElement, InputProps>(InputRef),
  __STATIC_PROPS,
);

export default Input;
