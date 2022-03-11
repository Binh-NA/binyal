import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SpaceY as SY } from '../../../../binyal/src/components';

export default {
  title: 'Components/Space',
  component: SY,
  argTypes: {
    size: {
      name: 'Size',
      description: 'Set the size of block',
      defaultValue: undefined,
      type: 'number',
    },
  },
} as ComponentMeta<typeof SY>;

const TemplateSpaceY: ComponentStory<typeof SY> = (args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'start',
      flexDirection: 'column',
    }}
  >
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'pink',
      }}
    />
    <SY {...args} />
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'pink',
      }}
    />
  </div>
);

export const SpaceY = TemplateSpaceY.bind({});
SpaceY.args = {
  size: 24,
};
