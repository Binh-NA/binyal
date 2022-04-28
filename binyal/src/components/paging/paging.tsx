import React from 'react';
import { ByElement } from '../../common/by-element';
import { Select } from '../../components/select';
import { Button } from '../../components/button';
import { Icon } from '../icon';
import { Option } from '../select/option';
import Css from './paging.module.css';

const options: Option<number>[] = [
  {
    key: '10',
    value: 10,
    name: '10 Lines/Page',
  },
  {
    key: '20',
    value: 20,
    name: '20 Lines/Page',
  },
  {
    key: '50',
    value: 50,
    name: '50 Lines/Page',
  },
  {
    key: '100',
    value: 100,
    name: '100 Lines/Page',
  },
];

export interface Page {
  page: number;
  limit: number;
}

export interface PaginationProps extends ByElement {
  page: number;
  limit: number;
  total: number;
  onChange: (page: number, limit: number) => void;
}

const configClass = {
  size: {
    large: Css.large,
    medium: Css.medium,
    small: Css.small,
  },
};

const getClass = (props: PaginationProps): string => {
  const classes: string[] = [Css.c, configClass.size[props.size ?? 'medium']];
  return classes.join(' ');
};

const Pagination = (props: PaginationProps): JSX.Element => {
  const renderPrev = () => {
    return (
      <Button
        size={props.size}
        style={props.style}
        outline
        icon={<Icon symbol="arrowLeft" />}
        onClick={() =>
          props.onChange(props.page === 1 ? 1 : props.page - 1, props.limit)
        }
        disabled={props.page <= 1}
        // eslint-disable-next-line react/no-children-prop
        children=""
      />
    );
  };

  const renderNext = () => {
    const last =
      Math.floor(props.total / props.limit) +
      (props.total % props.limit === 0 ? 0 : 1);
    return (
      <Button
        size={props.size}
        style={props.style}
        outline
        icon={<Icon symbol="arrowRight" />}
        onClick={() =>
          props.onChange(
            props.page === last ? last : props.page + 1,
            props.limit,
          )
        }
        disabled={props.page >= last}
        // eslint-disable-next-line react/no-children-prop
        children=""
      />
    );
  };

  let elements = [];
  const currentShow = 6;
  const first = 1;
  const last =
    Math.floor(props.total / props.limit) +
    (props.total % props.limit === 0 ? 0 : 1);

  if (last <= currentShow) {
    for (let i = 0; i < last; i += 1) {
      elements.push(`${i + 1}`);
    }
  } else {
    const nextPlus = [];
    const prevPlus = [];
    const currents = [];
    let dotNext = true;
    let dotPrev = true;
    for (let i = props.page - 2; i <= props.page + 2; i += 1) {
      if (i <= first) {
        nextPlus.unshift(props.page + 2 + (2 - i));
        dotPrev = false;
      } else if (i >= last) {
        prevPlus.push(props.page - 2 - (i - last + 1));
        dotNext = false;
      } else if (i !== first && i !== last) {
        if (i === first + 1) {
          dotPrev = false;
        }
        if (i === last - 1) {
          dotNext = false;
        }
        currents.push(i);
      }
    }
    elements.push(first);
    if (dotPrev) {
      elements.push('...');
    }
    elements = elements.concat(prevPlus);
    elements = elements.concat(currents);
    elements = elements.concat(nextPlus);
    if (dotNext) {
      elements.push('...');
    }
    elements.push(last);
  }

  if (elements.length === 0) {
    elements.push(1);
  }

  return (
    <div className={getClass(props)}>
      {renderPrev()}
      {elements.map((item, i) =>
        item === '...' ? (
          <span key={i.toString()}>...</span>
        ) : (
          <Button
            key={i.toString()}
            size={props.size}
            style={props.style}
            outline={`${item}` !== `${props.page}`}
            onClick={() => {
              if (`${item}` !== `${props.page}`) {
                props.onChange(parseInt(`${item}`, 10), props.limit);
              }
            }}
          >
            {item}
          </Button>
        ),
      )}
      {renderNext()}
      <Select<number>
        size={props.size}
        style={props.style}
        options={options}
        value={props.limit}
        setValue={(param) => props.onChange(1, param as number)}
      />
    </div>
  );
};

export default Pagination;
