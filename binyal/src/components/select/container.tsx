import React from 'react';
import { useOutsides } from '../../hooks/outsite';
import { Option } from './option';
import Css from './select.module.css';
import { RefContainer } from '../portal/ref-container';

export interface ContainerProps<T> {
  pRef: React.RefObject<HTMLDivElement>;
  value?: T | T[];
  options: Option<T>[];
  isMultiple?: boolean;
  setValue: (value: T | T[]) => void;
  onOutSite: (isOutSite: boolean) => void;
}

export const Container = <T,>(props: ContainerProps<T>): React.ReactElement => {
  const dRef = React.useRef<HTMLDivElement>(null);

  useOutsides([dRef, props.pRef], () => {
    props.onOutSite(false);
  });

  return (
    <RefContainer pRef={props.pRef} isShadow>
      <div ref={dRef} className={Css.container}>
        {props.options.map((item) => (
          <Option<T>
            key={item.key}
            value={props.value}
            option={item}
            isMultiple={props.isMultiple}
            setValue={props.setValue}
          />
        ))}
      </div>
    </RefContainer>
  );
};
