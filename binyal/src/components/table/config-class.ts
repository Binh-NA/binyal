import React from 'react';
import { TableFixed, TableScroll } from './context';
import { Align, Fixed, TableColumn } from './interface';
import Css from './table.module.css';

export const __CONFIGS: Record<Align, string> = {
  left: Css.align_left,
  center: Css.align_center,
  right: Css.align_right,
};

export const getClass = <T>(param: TableColumn<T>): string => {
  const classes = [__CONFIGS[param.align ?? 'left']];
  if (param.className) classes.push(param.className);
  return classes.join(' ');
};

export const calcLeft = (index: number, stickies?: TableFixed) => {
  let left = 0;
  if (!stickies) return left;
  for (let i = 0; i < index; i += 1) {
    if (stickies[i] && stickies[i].isStickyLeft) {
      left += stickies[i].width;
    }
  }
  return left;
};

export const calcRight = (
  index: number,
  max: number,
  stickies?: TableFixed,
) => {
  let right = 0;
  if (!stickies) return right;
  for (let i = max; i > index; i -= 1) {
    if (stickies[i] && stickies[i].isStickyRight) {
      right += stickies[i].width;
    }
  }
  return right;
};

export const getStyle = (
  index: number,
  max: number,
  fixed?: Fixed,
  stickies?: TableFixed,
): React.CSSProperties => {
  const style: React.CSSProperties = {};
  if (!fixed?.left && !fixed?.right) return style;
  style.position = 'sticky';
  style.zIndex = 1997;
  if (fixed.left) {
    style.left = calcLeft(index, stickies);
  }
  if (fixed.right) {
    style.right = calcRight(index, max, stickies);
  }
  return style;
};

//

export const calcBorderLeft = (index: number, stickies?: TableFixed) => {
  let left = 0;
  if (!stickies) return left;
  for (let i = 0; i < index; i += 1) {
    if (stickies[i]) {
      left += stickies[i].width;
    }
  }
  return left;
};

export const calcBorderRight = (
  index: number,
  max: number,
  stickies?: TableFixed,
) => {
  let right = 0;
  if (!stickies) return right;
  for (let i = max; i > index; i -= 1) {
    if (stickies[i]) {
      right += stickies[i].width;
    }
  }
  return right;
};

export const getBorderStyle = (
  index: number,
  max: number,
  fixed?: Fixed,
  stickies?: TableFixed,
  scroll?: TableScroll,
): React.CSSProperties => {
  const style: React.CSSProperties = {};
  if (!fixed?.left && !fixed?.right) return style;
  if (fixed.left) {
    const left = calcLeft(index, stickies);
    if (left < (scroll?.left ?? 0)) {
      style.borderRightWidth = 1;
    }
  }
  if (fixed.right) {
    const right = calcRight(index, max, stickies);
    if (right < (scroll?.right ?? 0)) {
      style.borderLeftWidth = 1;
    }
  }
  return style;
};
