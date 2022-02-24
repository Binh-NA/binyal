import { Size, SIZE } from './size';
import { Style, STYLE } from './style';

export interface ByElement {
  size?: Size;
  style?: Style;
}

export type AutoComplete = 'on' | 'off';

export const ByElement = {
  size: SIZE,
  style: STYLE,
  autoComplete: {
    on: 'on' as AutoComplete,
    off: 'off' as AutoComplete,
  },
};

export const withStaticProps = <T, P, E>(
  forwarded: React.ForwardRefExoticComponent<P & React.RefAttributes<E>>,
  staticProps: T,
) => Object.assign(forwarded, staticProps);
