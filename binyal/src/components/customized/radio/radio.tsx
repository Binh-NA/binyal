import React from 'react';
import { ByElement } from '../../../common/by-element';
import { Size } from '../../../common/size';
import { SpaceX } from '../../space/space';
import Css from './radio.module.css';
import { RadioProps } from '../../radio/radio';

export interface CustomizedRadioProps extends RadioProps {
  icon: React.ReactNode;
  emptyIcon: React.ReactNode;
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

const getClass = (props: CustomizedRadioProps): string => {
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

const Radio = (props: CustomizedRadioProps): React.ReactElement => (
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
      onChange={props.onChange}
    />
    <span className={Css.mc}>{props.icon}</span>
    <span className={Css.muc}>{props.emptyIcon}</span>
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
