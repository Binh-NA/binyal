import React from 'react';
import {
  ArrowDown,
  Close,
  Star,
  StarBorder,
  Heart,
  HeartBorder,
  Info,
} from './content';

export type IconSymbol =
  | 'arrowDown'
  | 'close'
  | 'star'
  | 'starBorder'
  | 'heart'
  | 'heartBorder'
  | 'info';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  symbol: IconSymbol;
}

const SwitchIcon = (props: IconProps): React.ReactElement => {
  switch (props.symbol) {
    case 'arrowDown':
      return <ArrowDown {...props} />;
    case 'close':
      return <Close {...props} />;
    case 'star':
      return <Star {...props} />;
    case 'starBorder':
      return <StarBorder {...props} />;
    case 'heart':
      return <Heart {...props} />;
    case 'heartBorder':
      return <HeartBorder {...props} />;
    case 'info':
      return <Info {...props} />;
    default:
      return <></>;
  }
};

const Icon = (props: IconProps): React.ReactElement => (
  <SwitchIcon
    {...props}
    width={props.width ?? 20}
    height={props.height ?? 20}
  />
);

export default Icon;
