import React from 'react';
import Icons from '../../icon/icon.svg';

type IconSymbol =
  | 'arrowDown'
  | 'close'
  | 'star'
  | 'starBorder'
  | 'heart'
  | 'heartBorder';

const __ICON_IDS: Record<IconSymbol, string> = {
  arrowDown: 'by-i-arrow-down',
  close: 'by-i-close',
  star: 'by-i-star',
  starBorder: 'by-i-star-border',
  heart: 'by-i-heart',
  heartBorder: 'by-i-heart-border',
};

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  symbol: IconSymbol;
}

const Icon = (props: IconProps): React.ReactElement => {
  return (
    <svg {...props} width={props.width ?? 20} height={props.height ?? 20}>
      <use xlinkHref={`${Icons}#${__ICON_IDS[props.symbol]}`} />
    </svg>
  );
};

export default Icon;
