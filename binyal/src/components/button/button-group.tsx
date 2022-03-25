import React from 'react';
import { Direction, DIRECTION } from '../../common/direction';
import { Flex } from '../flex';
import Css from './button.module.css';

export interface ButtonGroupProps {
  direction?: Direction;
  children?: React.ReactElement[];
}

const getClass = (props: ButtonGroupProps): string => {
  const classes = [Css.bg, props.direction === DIRECTION.col ? Css.c : Css.r];
  return classes.join(' ');
};

const ButtonGroup = (props: ButtonGroupProps): React.ReactElement => (
  <Flex direction={props.direction} className={getClass(props)}>
    {props.children}
  </Flex>
);

ButtonGroup.direction = DIRECTION;

export default ButtonGroup;
