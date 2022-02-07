import React from 'react';
import buttonCss from './button.module.css';
import LinkCss from './link.module.css';
import { Size, SIZE } from '../../common/size';
import { Style, STYLE } from '../../common/style';
import { SpaceX } from '../space/space';
import Loading from '../loading';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonShape = 'round' | 'circle';

export interface ButtonProps {
  // properties
  className?: string;
  type?: ButtonType;
  disabled?: boolean;
  tabIndex?: number;
  // content
  loading?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  // link
  href?: string;
  target?: string;
  // css
  size?: Size;
  style?: Style;
  fill?: boolean;
  shape?: ButtonShape;
  outline?: boolean;
  // events
  onClick?: React.MouseEventHandler;
}

const spaceSize: Record<Size, number> = {
  large: 6,
  medium: 4,
  small: 2,
};

const ButtonContent = (props: ButtonProps): React.ReactElement => {
  return (
    <>
      {props.icon && <span>{props.icon}</span>}
      {props.icon && props.children && (
        <SpaceX size={spaceSize[props.size ?? 'medium']} />
      )}
      {props.children && <span>{props.children}</span>}
      {props.loading && <Loading style={props.style} />}
    </>
  );
};

const configClass = {
  button: {
    size: {
      large: buttonCss.bLarge,
      medium: buttonCss.bMedium,
      small: buttonCss.bSmall,
    },
    shape: {
      round: buttonCss.bRound,
      circle: buttonCss.bCircle,
    },
    nonOutline: {
      flat: buttonCss.bFlat,
      primary: buttonCss.bPrimary,
      warning: buttonCss.bWarning,
      danger: buttonCss.bDanger,
    },
    outline: {
      flat: buttonCss.bOutlineFlat,
      primary: buttonCss.bOutlinePrimary,
      warning: buttonCss.bOutlineWarning,
      danger: buttonCss.bOutlineDanger,
    },
  },
  link: {
    size: {
      large: LinkCss.lLarge,
      medium: LinkCss.lMedium,
      small: LinkCss.lSmall,
    },
    shape: {
      round: LinkCss.lRound,
      circle: LinkCss.lCircle,
    },
    nonOutline: {
      flat: LinkCss.lFlat,
      primary: LinkCss.lPrimary,
      warning: LinkCss.lWarning,
      danger: LinkCss.lDanger,
    },
    outline: {
      flat: LinkCss.lOutlineFlat,
      primary: LinkCss.lOutlinePrimary,
      warning: LinkCss.lOutlineWarning,
      danger: LinkCss.lOutlineDanger,
    },
  },
};

const getClass = (props: ButtonProps): string => {
  const type = props.href ? 'link' : 'button';
  const classes: string[] = [
    type === 'link' ? LinkCss.l : buttonCss.b,
    configClass[type].size[props.size ?? 'medium'],
    configClass[type].shape[props.shape ?? 'round'],
    configClass[type][props.outline ? 'outline' : 'nonOutline'][
      props.style ?? 'primary'
    ],
  ];
  if (props.fill) classes.push(buttonCss.bFill);
  if (props.className) classes.push(props.className);
  if (type === 'link' && props.disabled) classes.push(LinkCss.lDisabled);
  return classes.join(' ');
};

const Button = (props: ButtonProps) => {
  return props.href ? (
    <a
      className={getClass(props)}
      href={props.href}
      target={props.target ?? '_self'}
    >
      <ButtonContent {...props} />
    </a>
  ) : (
    <button
      className={getClass(props)}
      type={props.type}
      disabled={props.disabled}
      tabIndex={props.tabIndex}
      onClick={props.onClick}
    >
      <ButtonContent {...props} />
    </button>
  );
};

Button.size = SIZE;
Button.style = STYLE;
Button.type = {
  button: 'button' as ButtonType,
  reset: 'reset' as ButtonType,
  submit: 'submit' as ButtonType,
};
Button.shape = {
  round: 'round' as ButtonShape,
  circle: 'circle' as ButtonShape,
};

export default Button;
