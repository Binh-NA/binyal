import React from 'react';
import { Style, STYLE } from '../../common/style';
import loadingCss from './loading.module.css';

export interface LoadingProps {
  style?: Style;
}

const configClass = {
  flat: loadingCss.flat,
  primary: loadingCss.primary,
  warning: loadingCss.warning,
  danger: loadingCss.danger,
};

const Loading = (props: LoadingProps): React.ReactElement => {
  return (
    <div
      className={`${loadingCss.content} ${
        configClass[props.style ?? 'primary']
      }`}
    >
      <div className={loadingCss.loader} />
    </div>
  );
};

Loading.style = STYLE;

export default Loading;
