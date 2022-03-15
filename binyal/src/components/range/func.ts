import { Moving, Values, __MOVING } from './interface';

export const calcLeft = (
  val: number,
  width: number,
  max = 100,
  min = 0,
): number => {
  const maxPositive = max - min;
  const valuePositive = val - min;
  const percent = valuePositive / maxPositive;
  return percent * width;
};

export const checkLefts = (
  left: Values,
  type: Moving,
  isMultiple?: boolean,
): Values => {
  if (!isMultiple) return left;
  if (left.start < left.end) return left;
  if (type === __MOVING.start) {
    return {
      start: left.end,
      end: left.end,
    };
  }
  return {
    start: left.start,
    end: left.start,
  };
};

export const calcLefts = (
  val: Values,
  type: Moving,
  width: number,
  max = 100,
  min = 0,
  isMultiple?: boolean,
): Values => {
  return checkLefts(
    {
      start: calcLeft(val.start, width, max, min),
      end: isMultiple ? calcLeft(val.end, width, max, min) : 0,
    },
    type,
  );
};

export const getPropValue = (
  val?: Values | number,
  min?: number,
  isMultiple?: boolean,
): Values => {
  if (!isMultiple) {
    return {
      start: (val as number) ?? min ?? 0,
      end: 0,
    };
  }
  return (
    (val as Values) ?? {
      start: min ?? 0,
      end: min ?? 0,
    }
  );
};

export const calcValue = (
  percent: number,
  max = 100,
  min = 0,
  step = 1,
): number => {
  const maxPositive = max - min;
  const valuePositive = Math.round((maxPositive * percent) / 100 / step) * step;
  return min + valuePositive;
};

export const getValue = (param?: Values, isMultiple?: boolean): string => {
  if (!param) return '';
  if (!isMultiple) return `${param.start}`;
  return `${param.start},${param.end}`;
};
