import React from 'react';
import buttonCss from './button.module.css';
import LinkCss from './link.module.css';
import { ByElement, withStaticProps } from '../../common/by-element';
import { SpaceX } from '../space/space';
('../space');
import Loading from '../loading';
import { Size } from '../../common/size';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonShape = 'round' | 'circle';

export interface ButtonProps extends ByElement {
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
  fill?: boolean;
  shape?: ButtonShape;
  outline?: boolean;
  // events
  onClick?: React.MouseEventHandler;
}

const __STATIC = {
  type: {
    button: 'button' as ButtonType,
    reset: 'reset' as ButtonType,
    submit: 'submit' as ButtonType,
  },
  shape: {
    round: 'round' as ButtonShape,
    circle: 'circle' as ButtonShape,
  },
};

export interface ButtonStaticProps {
  size: typeof ByElement.size;
  style: typeof ByElement.style;
  type: typeof __STATIC.type;
  shape: typeof __STATIC.shape;
}

const __STATIC_PROPS: ButtonStaticProps = {
  size: ByElement.size,
  style: ByElement.style,
  type: __STATIC.type,
  shape: __STATIC.shape,
};

const spaceSize: Record<Size, number> = {
  large: 6,
  medium: 4,
  small: 2,
};

const ButtonContent = (props: ButtonProps): React.ReactElement => {
  return (
    <>
      {props.icon && <span className={buttonCss.icon}>{props.icon}</span>}
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
      large: buttonCss.large,
      medium: buttonCss.medium,
      small: buttonCss.small,
    },
    shape: {
      round: buttonCss.round,
      circle: buttonCss.circle,
    },
    nonOutline: {
      flat: buttonCss.flat,
      primary: buttonCss.primary,
      warning: buttonCss.warning,
      danger: buttonCss.danger,
    },
    outline: {
      flat: buttonCss.outline_flat,
      primary: buttonCss.outline_primary,
      warning: buttonCss.outline_warning,
      danger: buttonCss.outline_danger,
    },
  },
  link: {
    size: {
      large: LinkCss.large,
      medium: LinkCss.medium,
      small: LinkCss.small,
    },
    shape: {
      round: LinkCss.round,
      circle: LinkCss.circle,
    },
    nonOutline: {
      flat: LinkCss.flat,
      primary: LinkCss.primary,
      warning: LinkCss.warning,
      danger: LinkCss.danger,
    },
    outline: {
      flat: LinkCss.outline_flat,
      primary: LinkCss.outline_primary,
      warning: LinkCss.outline_warning,
      danger: LinkCss.outline_danger,
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
  if (props.fill) classes.push(buttonCss.fill);
  if (type === 'link' && props.disabled) classes.push(LinkCss.disabled);
  if (props.className) classes.push(props.className);
  return classes.join(' ');
};

const ButtonRef = (
  props: ButtonProps,
  ref?: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>,
) => {
  return props.href ? (
    <a
      ref={ref as React.ForwardedRef<HTMLAnchorElement>}
      className={getClass(props)}
      href={props.href}
      target={props.target ?? '_self'}
    >
      <ButtonContent {...props} />
    </a>
  ) : (
    <button
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
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

const Button = withStaticProps<
  ButtonStaticProps,
  ButtonProps,
  HTMLButtonElement | HTMLAnchorElement
>(
  React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ButtonRef,
  ),
  __STATIC_PROPS,
);

export default Button;
