import React from 'react';
import { ByElement } from '../../common/by-element';
import { Size } from '../../common/size';
import { SpaceX } from '../space/space';
import Css from './radio.module.css';

export interface RadioProps extends ByElement {
  // properties
  id?: string;
  name?: string;
  className?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  value?: string;
  // contents
  label?: string;
  fill?: boolean;
  // events
  onClick?: React.MouseEventHandler<HTMLInputElement>;
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

const getClass = (props: RadioProps): string => {
  const classes: string[] = [
    Css.r,
    configClass.size[props.size ?? 'medium'],
    configClass.style[props.style ?? 'primary'],
  ];
  if (props.fill) classes.push(Css.fill);
  if (props.disabled) classes.push(Css.disabled);
  if (props.className) classes.push(props.className);
  return classes.join(' ');
};

const Radio = (props: RadioProps): React.ReactElement => (
  <label className={getClass(props)}>
    <input
      id={props.id}
      name={props.name}
      type="radio"
      disabled={props.disabled}
      autoFocus={props.autoFocus}
      checked={props.checked}
      defaultChecked={props.defaultChecked}
      value={props.value}
      onClick={props.onClick}
    />
    <span className={Css.m}></span>
    {props.label && (
      <>
        <SpaceX size={spaceSize[props.size ?? 'medium']} />
        {props.label}
      </>
    )}
  </label>
);

Radio.size = ByElement.size;
Radio.Style = ByElement.style;

export default Radio;
