import React from 'react';

export const SpaceX = (props: { size: number }) => {
  return <span style={{ width: props.size, height: '100%' }}></span>;
};

export const SpaceY = (props: { size: number }) => {
  return <span style={{ width: '100%', height: props.size }}></span>;
};
