import React from 'react';
import { ByElement } from '../../common/by-element';
import { Flex } from '../flex';
import { SpaceX, SpaceY } from '../space/space';
import Radio from './radio';
import { Direction, DIRECTION } from '../../common/direction';

interface RadioOption {
  key: string;
  value: string;
  name: string;
  disabled?: boolean;
}

export interface RadioGroupProps extends ByElement {
  name?: string;
  className?: string;
  direction?: Direction;
  gap?: number;
  options?: RadioOption[];
  value?: string;
  setValue?: (value?: string) => void;
}

const __STATIC: {
  direction: Record<Direction, Direction>;
} = {
  direction: DIRECTION,
};

const SpaceContent = (props: {
  isCol: boolean;
  gap: number;
}): React.ReactElement =>
  props.isCol ? <SpaceY size={props.gap} /> : <SpaceX size={props.gap} />;

const RadioGroup = (props: RadioGroupProps): React.ReactElement => {
  const [value, setValue] = React.useState<string>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    setValue(val);
    props.setValue?.(val);
  };

  React.useEffect(() => {
    setValue(props.value);
  }, [props.value]);

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
            onChange={onChange}
            disabled={item.disabled}
            checked={value === item.value}
            size={props.size}
            style={props.style}
          />
        </React.Fragment>
      ))}
    </Flex>
  );
};

export default RadioGroup;
