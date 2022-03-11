import React from 'react';
import Css from './ref-container.module.css';
import { Portal } from './index';
import { useScroll } from '../../hooks/scroll';
import { Placement, PLACEMENT } from '../../common/placement';
import { ByElement } from '../../common/by-element';

const __Z_INDEX = 1996;

export interface RefPlacementProps<T extends HTMLElement> extends ByElement {
  pRef: React.RefObject<T>;
  placement?: Placement;
  space?: number;
  children: React.ReactChild;
  isShadow?: boolean;
}

interface Config {
  style?: React.CSSProperties;
  className?: string;
}

const configClass = {
  style: {
    flat: Css.flat,
    primary: Css.primary,
    warning: Css.warning,
    danger: Css.danger,
  },
  size: {
    large: Css.large,
    medium: Css.medium,
    small: Css.small,
  },
};

const getPosition = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  placement?: Placement,
  space?: number,
): Config => {
  const parentPosition = ref.current?.getBoundingClientRect();
  if (!parentPosition) return {};

  const spaceElement = (space ?? 0) + 3;
  const style: React.CSSProperties = {};
  const classes = [Css.arrow];
  const windowWidth = document.documentElement.clientWidth;

  switch (placement) {
    case PLACEMENT.top: {
      style.left = parentPosition.x + parentPosition.width / 2;
      style.bottom = window.innerHeight - parentPosition.y + spaceElement;
      style.transform = 'translateX(-50%)';
      classes.push(Css.arrow_down, Css.arrow_down_center);
      break;
    }
    case PLACEMENT.topStart: {
      style.left = parentPosition.x;
      style.bottom = window.innerHeight - parentPosition.y + spaceElement;
      classes.push(Css.arrow_down, Css.arrow_down_start);
      break;
    }
    case PLACEMENT.topEnd: {
      style.right = windowWidth - parentPosition.x - parentPosition.width;
      style.bottom = window.innerHeight - parentPosition.y + spaceElement;
      classes.push(Css.arrow_down, Css.arrow_down_end);
      break;
    }
    case PLACEMENT.bottom: {
      style.left = parentPosition.x + parentPosition.width / 2;
      style.top = parentPosition.y + parentPosition.height + spaceElement;
      style.transform = 'translateX(-50%)';
      classes.push(Css.arrow_up, Css.arrow_up_center);
      break;
    }
    case PLACEMENT.bottomStart: {
      style.left = parentPosition.x;
      style.top = parentPosition.y + parentPosition.height + spaceElement;
      classes.push(Css.arrow_up, Css.arrow_up_start);
      break;
    }
    case PLACEMENT.bottomEnd: {
      style.right = windowWidth - parentPosition.x - parentPosition.width;
      style.top = parentPosition.y + parentPosition.height + spaceElement;
      classes.push(Css.arrow_up, Css.arrow_up_end);
      break;
    }
    case PLACEMENT.left: {
      style.right = windowWidth - parentPosition.x + spaceElement;
      style.top = parentPosition.y + parentPosition.height / 2;
      style.transform = 'translateY(-50%)';
      classes.push(Css.arrow_right, Css.arrow_right_center);
      break;
    }
    case PLACEMENT.leftStart: {
      style.right = windowWidth - parentPosition.x + spaceElement;
      style.top = parentPosition.y;
      classes.push(Css.arrow_right, Css.arrow_right_start);
      break;
    }
    case PLACEMENT.leftEnd: {
      style.right = windowWidth - parentPosition.x + spaceElement;
      style.bottom =
        window.innerHeight - parentPosition.y - parentPosition.height;
      classes.push(Css.arrow_right, Css.arrow_right_end);
      break;
    }
    case PLACEMENT.right: {
      style.left = parentPosition.x + parentPosition.width + spaceElement;
      style.top = parentPosition.y + parentPosition.height / 2;
      style.transform = 'translateY(-50%)';
      classes.push(Css.arrow_left, Css.arrow_left_center);
      break;
    }
    case PLACEMENT.rightStart: {
      style.left = parentPosition.x + parentPosition.width + spaceElement;
      style.top = parentPosition.y;
      classes.push(Css.arrow_left, Css.arrow_left_start);
      break;
    }
    case PLACEMENT.rightEnd: {
      style.left = parentPosition.x + parentPosition.width + spaceElement;
      style.bottom =
        window.innerHeight - parentPosition.y - parentPosition.height;
      classes.push(Css.arrow_left, Css.arrow_left_end);
      break;
    }
    default: {
      let p: Placement = PLACEMENT.top;
      const isY = windowWidth < window.innerHeight;
      if (isY && parentPosition.y < window.innerHeight / 2) {
        p = PLACEMENT.bottom;
      } else if (!isY && parentPosition.x < windowWidth / 2) {
        p = PLACEMENT.right;
      } else if (!isY && parentPosition.x >= windowWidth / 2) {
        p = PLACEMENT.left;
      }
      return getPosition(ref, p, space);
    }
  }

  return {
    style,
    className: classes.join(' '),
  };
};

const getClass = (props: RefPlacementProps<HTMLElement>): string => {
  const classes = [
    Css.t_c,
    configClass.style[props.style ?? 'primary'],
    configClass.size[props.size ?? 'medium'],
  ];
  if (props.isShadow) classes.push(Css.c_shadow);
  return classes.join(' ');
};

export const RefPlacement = <T extends HTMLElement>(
  props: RefPlacementProps<T>,
): React.ReactElement => {
  const [config, setConfig] = React.useState<Config>({});

  const calcPlacement = () => {
    setConfig(getPosition(props.pRef, props.placement, props.space));
  };

  React.useEffect(calcPlacement, []);

  useScroll(calcPlacement, [props.pRef]);

  return (
    <Portal>
      <div
        className={getClass(props)}
        style={{
          ...config.style,
          zIndex: __Z_INDEX,
        }}
      >
        <div className={Css.t_r}>
          <span className={config.className} />
          {props.children}
        </div>
      </div>
    </Portal>
  );
};
