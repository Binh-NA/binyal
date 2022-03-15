import React from 'react';
import { ByElement } from '../../common/by-element';
import Css from './range.module.css';
import { Moving, Values, __MOVING } from './interface';
import {
  calcLefts,
  calcValue,
  checkLefts,
  getPropValue,
  getValue,
} from './func';

export interface RangeProps extends ByElement {
  id?: string;
  name?: string;
  className?: string;
  value?: Values | number;
  max?: number;
  min?: number;
  step?: number;
  disabled?: boolean;
  multiple?: boolean;
  // events
  setValue?: (value: Values | number) => void;
  onChange?: (value: Values | number) => void;
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

const getClass = (props: RangeProps): string => {
  const classes: string[] = [
    Css.r,
    configClass.size[props.size ?? 'medium'],
    configClass.style[props.style ?? 'primary'],
  ];
  if (props.disabled) classes.push(Css.disabled);
  if (props.className) classes.push(props.className);
  return classes.join(' ');
};

const Range = (props: RangeProps): React.ReactElement => {
  const [movingType, setMovingType] = React.useState<Moving>();
  const [left, setLeft] = React.useState<Values>({ start: 0, end: 0 });
  const [value, setValue] = React.useState<Values>();
  const dRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const propValue = getPropValue(props.value, props.min, props.multiple);
    setValue(propValue);
    const bounding = dRef.current?.getBoundingClientRect();
    const maxWidth = bounding?.width ?? 1;
    setLeft(
      calcLefts(
        propValue,
        movingType ?? __MOVING.start,
        maxWidth,
        props.max,
        props.min,
        props.multiple,
      ),
    );
  }, [props.value]);

  const onMouseDown =
    (moving: Moving) => (e: React.MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      setMovingType(moving);
    };

  const onMouseMove = React.useCallback(
    (e: DocumentEventMap['mousemove']) => {
      if (!movingType) return;

      const bounding = dRef.current?.getBoundingClientRect();
      const maxWidth = bounding?.width ?? 0;
      let x = e.clientX - (bounding?.x ?? 0);
      if (x < 0) x = 0;
      if (x > maxWidth) x = maxWidth;
      setLeft(
        checkLefts(
          {
            ...left,
            [movingType]: x,
          },
          movingType,
          props.multiple,
        ),
      );

      if (props.onChange) {
        const percent = (x / maxWidth) * 100;
        const val = calcValue(percent, props.max, props.min, props.step);
        const newVal: Values | number = props.multiple
          ? {
              ...(value ?? { start: 0, end: 0 }),
              [movingType]: val,
            }
          : val;
        props.onChange(newVal);
      }
    },
    [movingType, dRef, left, value, props.multiple],
  );

  const onMouseUp = React.useCallback(() => {
    if (!movingType) return;
    setMovingType(undefined);
    const bounding = dRef.current?.getBoundingClientRect();
    const maxWidth = bounding?.width ?? 0;
    const startPercent = (left.start / maxWidth) * 100;
    const startVal = calcValue(startPercent, props.max, props.min, props.step);
    const endPercent = (left.end / maxWidth) * 100;
    const endVal = calcValue(endPercent, props.max, props.min, props.step);
    const newVal = {
      start: startVal,
      end: endVal,
    };
    setValue(newVal);
    props.setValue?.(props.multiple ? newVal : startVal);
  }, [movingType, left, dRef, props.multiple]);

  React.useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  const trackStyle: React.CSSProperties = {};
  const markStartStyle: React.CSSProperties = {
    left: left.start,
  };
  const markEndStyle: React.CSSProperties = {
    left: left.end,
  };

  if (props.multiple) {
    trackStyle.width = left.end - left.start;
    trackStyle.left = left.start;
  } else {
    trackStyle.width = left.start;
  }

  return (
    <div ref={dRef} className={getClass(props)}>
      <span className={Css.rail} />
      <span className={Css.track} style={trackStyle} />
      <span className={Css.current} style={markStartStyle}>
        <span
          className={Css.cursor}
          onMouseDown={onMouseDown(__MOVING.start)}
        />
      </span>
      {props.multiple && (
        <span className={Css.current} style={markEndStyle}>
          <span
            className={Css.cursor}
            onMouseDown={onMouseDown(__MOVING.end)}
          />
        </span>
      )}
      <input
        type="range"
        id={props.id}
        name={props.name}
        max={props.max}
        min={props.min}
        step={props.step}
        value={getValue(value, props.multiple)}
        onChange={() => console.warn('Binyal not supported')}
      />
    </div>
  );
};

Range.style = ByElement.style;
Range.size = ByElement.size;

export default Range;
