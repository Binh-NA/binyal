import { Size, SIZE } from './size';
import { Style, STYLE } from './style';

export interface ByElement {
  size?: Size;
  style?: Style;
}

export const ByElement = {
  size: SIZE,
  style: STYLE,
};

export const withStaticProps = <T, P, E>(
  forwarded: React.ForwardRefExoticComponent<P & React.RefAttributes<E>>,
  staticProps: T,
) => Object.assign(forwarded, staticProps);
