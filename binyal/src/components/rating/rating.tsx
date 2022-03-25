import React, { ChangeEvent } from 'react';
import { ByElement } from '../../common/by-element';
import { Direction, DIRECTION } from '../../common/direction';
import { CustomizedRadio } from '../customized/radio';
import { Flex } from '../flex';
import Css from '../customized/radio/radio.module.css';
import { Icon } from '../icon';

export interface RatingProps extends ByElement {
  // properties
  name?: string;
  className?: string;
  disabled?: boolean;
  defaultValue?: string;
  value?: number;
  direction?: Direction;
  max?: number;
  // contents
  icon?: React.ReactNode;
  emptyIcon?: React.ReactNode;
  // events
  setValue?: (value?: string) => void;
}

const Rating = (props: RatingProps): React.ReactElement => {
  const [value, setValue] = React.useState<number>();

  React.useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(parseInt(value, 10));
    props.setValue?.(value);
  };

  const getValue = (param?: number): number => {
    return param ?? 0;
  };

  return (
    <Flex direction={props.direction} className={props.className}>
      {Array.from({ length: props.max ?? 5 }, (_, i) => i).map((item) => (
        <CustomizedRadio
          key={item.toString()}
          name={props.name}
          className={getValue(value) > item ? Css.rating_checked : Css.rating}
          icon={props.icon ?? <Icon symbol="heart" />}
          emptyIcon={props.emptyIcon ?? <Icon symbol="heartBorder" />}
          value={`${item + 1}`}
          style={props.style}
          size={props.size}
          disabled={props.disabled}
          checked={value === item + 1}
          onChange={onChange}
        />
      ))}
    </Flex>
  );
};

Rating.direction = DIRECTION;

export default Rating;
