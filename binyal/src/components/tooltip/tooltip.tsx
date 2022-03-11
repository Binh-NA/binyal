import React from 'react';
import { ByElement } from '../../common/by-element';
import { PLACEMENT, Placement } from '../../common/placement';
import { RefPlacement } from '../portal/ref-placement';
import Css from './tooltip.module.css';

export interface TooltipProps extends ByElement {
  // properties
  className?: string;
  title?: React.ReactElement | string;
  placement?: Placement;
  // contents
  children?: React.ReactElement;
}

const Tooltip = (props: TooltipProps): React.ReactElement => {
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const dRef = React.useRef<HTMLDivElement>(null);

  const onMouse = (is: boolean) => (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsShow(is);
  };

  return (
    <div
      ref={dRef}
      onMouseOver={onMouse(true)}
      onMouseOut={onMouse(false)}
      className={Css.c_t}
    >
      {props.children}
      {isShow && (
        <RefPlacement
          pRef={dRef}
          space={4}
          placement={props.placement}
          style={props.style}
          size={props.size}
          isShadow
        >
          <div className={Css.c}>{props.title}</div>
        </RefPlacement>
      )}
    </div>
  );
};

Tooltip.placement = PLACEMENT;

export default Tooltip;
