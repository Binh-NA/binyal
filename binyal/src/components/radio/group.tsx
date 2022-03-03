import React from 'react';
import Flex from '../flex';
import { SpaceX, SpaceY } from '../space/space';
import Radio from './radio';

type RadioGroupDirection = 'row' | 'col';

interface RadioOption {
  key: string;
  value: string;
  name: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name?: string;
  className?: string;
  direction?: RadioGroupDirection;
  gap?: number;
  options?: RadioOption[];
  value?: string;
  setValue?: (value?: string) => void;
}

const __STATIC: {
  direction: Record<RadioGroupDirection, RadioGroupDirection>;
} = {
  direction: {
    col: 'col',
    row: 'row',
  },
};

const SpaceContent = (props: {
  isCol: boolean;
  gap: number;
}): React.ReactElement =>
  props.isCol ? <SpaceY size={props.gap} /> : <SpaceX size={props.gap} />;

const RadioGroup = (props: RadioGroupProps): React.ReactElement => {
  const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
    props.setValue?.(e.currentTarget.value);
  };

  return (
    <Flex direction={props.direction} className={props.className}>
      {props.options?.map((item, i) => (
        <React.Fragment key={item.key}>
          {i > 0 && (
            <SpaceContent
              isCol={props.direction === __STATIC.direction.col}
              gap={props.gap ?? 16}
            />
          )}
          <Radio
            name={props.name}
            label={item.name}
            value={item.value}
            onClick={onClick}
            disabled={item.disabled}
          />
        </React.Fragment>
      ))}
    </Flex>
  );
};

export default RadioGroup;
