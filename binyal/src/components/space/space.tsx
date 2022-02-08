import React from 'react';

export const SpaceX = (props: { size: number }) => {
  return <span style={{ width: props.size, display: 'inline-block' }}></span>;
};

export const SpaceY = (props: { size: number }) => {
  return <span style={{ height: props.size, display: 'inline-block' }}></span>;
};

const Space = {
  SpaceX,
  SpaceY,
};

export default Space;
