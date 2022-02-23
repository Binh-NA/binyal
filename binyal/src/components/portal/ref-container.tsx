import React from 'react';
import Css from './ref-container.module.css';
import { Portal } from './index';

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
}

export const RefContainer = <T extends HTMLElement>(
  props: RefContainer<T>,
): React.ReactElement => {
  const position = React.useMemo(() => {
    const parentPosition = props.pRef.current?.getBoundingClientRect();
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
  }, [props.pRef]);

  const style: React.CSSProperties = {
    maxHeight: position?.h,
    minWidth: position?.w,
    left: position?.x,
    zIndex: __Z_INDEX,
  };

  if (position?.isTop) {
    style.bottom = position?.y;
  } else {
    style.top = position?.y;
  }

  return (
    <Portal>
      <div className={Css.c} style={style}>
        {props.children}
      </div>
    </Portal>
  );
};
