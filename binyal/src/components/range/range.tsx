import React from 'react';
import { ByElement } from '../../common/by-element';
import Css from './range.module.css';

export interface RangeProps extends ByElement {
  id?: string;
  name?: string;
  className?: string;
  value?: number;
  max?: number;
  min?: number;
  step?: number;
  disabled?: boolean;
  // events
  setValue?: (value: number) => void;
  onChange?: (value: number) => void;
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
  const [isMoving, setIsMoving] = React.useState<boolean>(false);
  const [left, setLeft] = React.useState<number>(0);
  const dRef = React.useRef<HTMLDivElement>(null);
  const [value, setValue] = React.useState<number>();

  React.useEffect(() => {
    setValue?.(props.value);
    const bounding = dRef.current?.getBoundingClientRect();
    const maxWidth = bounding?.width ?? 1;
    setLeft(
      calcLeft(props.value ?? props.min ?? 0, maxWidth, props.max, props.min),
    );
  }, [props.value]);

  const trackStyle: React.CSSProperties = {
    width: left,
  };
  const currentStyle: React.CSSProperties = {
    left: left,
  };

  const onMouseDown = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setIsMoving(true);
  };

  const onMouseMove = React.useCallback(
    (e: DocumentEventMap['mousemove']) => {
      if (!isMoving) return;
      const bounding = dRef.current?.getBoundingClientRect();
      const maxWidth = bounding?.width ?? 0;
      let x = e.clientX - (bounding?.x ?? 0);
      if (x < 0) x = 0;
      if (x > maxWidth) x = maxWidth;
      setLeft(x);
      if (props.onChange) {
        const percent = (x / maxWidth) * 100;
        const val = calcValue(percent, props.max, props.min, props.step);
        props.onChange(val);
      }
    },
    [isMoving, dRef],
  );

  const calcLeft = (val: number, width: number, max = 100, min = 0): number => {
    const maxPositive = max - min;
    const valuePositive = val - min;
    const percent = valuePositive / maxPositive;
    return percent * width;
  };

  const calcValue = (percent: number, max = 100, min = 0, step = 1): number => {
    const maxPositive = max - min;
    const valuePositive =
      Math.round((maxPositive * percent) / 100 / step) * step;
    return min + valuePositive;
  };

  const onMouseUp = React.useCallback(() => {
    if (!isMoving) return;
    setIsMoving(false);
    const bounding = dRef.current?.getBoundingClientRect();
    const maxWidth = bounding?.width ?? 0;
    const percent = (left / maxWidth) * 100;
    const val = calcValue(percent, props.max, props.min, props.step);
    setValue(val);
    props.setValue?.(val);
  }, [isMoving, left, dRef]);

  React.useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  return (
    <div ref={dRef} className={getClass(props)}>
      <span className={Css.rail} />
      <span className={Css.track} style={trackStyle} />
      <span className={Css.current} style={currentStyle}>
        <span className={Css.cursor} onMouseDown={onMouseDown} />
        <input
          type="range"
          id={props.id}
          name={props.name}
          max={props.max}
          min={props.min}
          step={props.step}
          value={value ?? 0}
          onChange={() => console.warn('Binyal not supported')}
        />
      </span>
    </div>
  );
};

Range.style = ByElement.style;
Range.size = ByElement.size;

export default Range;
