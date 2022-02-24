import React from 'react';
import Css from './ref-container.module.css';
import { Portal } from './index';
import { useScroll } from '../../hooks/scroll';

interface Position {
  x: number;
  y: number;
  h: number;
  w: number;
  isTop: boolean;
}

const __DEFAULT_POSITION: Position = {
  x: 0,
  y: 0,
  h: 300,
  w: 100,
  isTop: false,
};

const __Z_INDEX = 1996;

export interface RefContainer<T extends HTMLElement> {
  pRef: React.RefObject<T>;
  children: React.ReactChild;
  isShadow?: boolean;
}

export const RefContainer = <T extends HTMLElement>(
  props: RefContainer<T>,
): React.ReactElement => {
  const [position, setPosition] = React.useState<Position>();

  const getPosition = (ref: React.RefObject<T>): Position | undefined => {
    const parentPosition = ref.current?.getBoundingClientRect();
    if (!parentPosition) return;
    const x = parentPosition.x,
      w = parentPosition.width;
    let y = parentPosition.y + parentPosition.height,
      isTop = false,
      h = __DEFAULT_POSITION.h;
    if (parentPosition.top > window.innerHeight / 2) {
      isTop = true;
      h = parentPosition.top - 10;
      y = window.innerHeight - parentPosition.top;
    } else {
      h = window.innerHeight - parentPosition.top - parentPosition.height - 10;
    }
    return {
      x,
      y,
      h: h > __DEFAULT_POSITION.h ? __DEFAULT_POSITION.h : h,
      w,
      isTop,
    };
  };

  React.useEffect(() => {
    setPosition(getPosition(props.pRef));
  }, []);

  useScroll(() => setPosition(getPosition(props.pRef)), [props.pRef]);

  const style: React.CSSProperties = {
    maxHeight: position?.h,
    minWidth: position?.w,
    left: position?.x,
    zIndex: __Z_INDEX,
  };

  if (position?.isTop) {
    style.bottom = position?.y + 2;
  } else {
    style.top = position?.y;
  }

  const classes = [Css.c, Css.scroll_vertical];
  if (props.isShadow) classes.push(Css.c_shadow);

  return (
    <Portal>
      <div className={classes.join(' ')} style={style}>
        {props.children}
      </div>
    </Portal>
  );
};
