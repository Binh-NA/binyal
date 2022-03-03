import React from 'react';
import Space from '../space';

type FlexDirection = 'row' | 'col';
type FlexAlign = 'stretch' | 'start' | 'center' | 'end' | 'between';

export interface FlexProps {
  className?: string;
  direction?: FlexDirection;
  gap?: number;
  alignItems?: FlexAlign;
  justifyContent?: FlexAlign;
  children?: React.ReactElement[];
}

const __STATIC: {
  direction: Record<FlexDirection, FlexDirection>;
  align: Record<FlexAlign, FlexAlign>;
} = {
  direction: {
    row: 'row',
    col: 'col',
  },
  align: {
    stretch: 'stretch',
    center: 'center',
    start: 'start',
    end: 'end',
    between: 'between',
  },
};

const getStyle = (props: FlexProps): React.CSSProperties => {
  const style: React.CSSProperties = {
    display: 'flex',
  };
  if (props.direction === __STATIC.direction.col)
    style.flexDirection = 'column';
  switch (props.alignItems) {
    case __STATIC.align.stretch:
      style.alignItems = 'stretch';
      break;
    case __STATIC.align.center:
      style.alignItems = 'center';
      break;
    case __STATIC.align.start:
      style.alignItems = 'flex-start';
      break;
    case __STATIC.align.end:
      style.alignItems = 'flex-end';
      break;
    case __STATIC.align.between:
      style.alignItems = 'space-between';
      break;
  }
  switch (props.justifyContent) {
    case __STATIC.align.stretch:
      style.justifyContent = 'stretch';
      break;
    case __STATIC.align.center:
      style.justifyContent = 'center';
      break;
    case __STATIC.align.start:
      style.justifyContent = 'flex-start';
      break;
    case __STATIC.align.end:
      style.justifyContent = 'flex-end';
      break;
    case __STATIC.align.between:
      style.justifyContent = 'space-between';
      break;
  }

  return style;
};

const Flex = (props: FlexProps): React.ReactElement => {
  return (
    <div className={props.className} style={getStyle(props)}>
      {props.children &&
        props.children.map((item, i) => {
          if (props.gap && i > 0) {
            return (
              <React.Fragment key={i}>
                {props.direction === __STATIC.direction.col ? (
                  <Space.SpaceY size={props.gap} />
                ) : (
                  <Space.SpaceX size={props.gap} />
                )}
                {item}
              </React.Fragment>
            );
          }
          return <React.Fragment key={i}>{item}</React.Fragment>;
        })}
    </div>
  );
};

Flex.direction = __STATIC.direction;
Flex.align = __STATIC.align;

export default Flex;
