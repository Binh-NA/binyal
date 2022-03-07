import React from 'react';
import { ByElement } from '../../common/by-element';
import { Size } from '../../common/size';
import { SpaceX } from '../space/space';
import Css from './toggle.module.css';

export interface ToggleProps extends ByElement {
  // properties
  id?: string;
  name?: string;
  className?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  // contents
  label?: string;
  fill?: boolean;
  children: undefined;
  // events
  setChecked?: (isChecked?: boolean) => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
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
};

const spaceSize: Record<Size, number> = {
  large: 6,
  medium: 4,
  small: 2,
};

const getClass = (props: ToggleProps): string => {
  const classes: string[] = [
    Css.c,
    configClass.size[props.size ?? 'medium'],
    configClass.style[props.style ?? 'primary'],
  ];
  if (props.fill) classes.push(Css.fill);
  if (props.disabled) classes.push(Css.disabled);
  if (props.className) classes.push(props.className);
  return classes.join(' ');
};

const Toggle = (props: ToggleProps): React.ReactElement => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    props.setChecked?.(isChecked);
    props.onChange?.(e);
  };

  return (
    <label className={getClass(props)}>
      <input
        id={props.id}
        name={props.name}
        type="checkbox"
        disabled={props.disabled}
        autoFocus={props.autoFocus}
        checked={props.checked}
        defaultChecked={props.defaultChecked}
        onChange={onChange}
      />
      <span className={Css.b} />
      <span className={Css.m} />
      {props.label && (
        <>
          <SpaceX size={spaceSize[props.size ?? 'medium']} />
          {props.label}
        </>
      )}
    </label>
  );
};

Toggle.size = ByElement.size;
Toggle.Style = ByElement.style;

export default Toggle;
