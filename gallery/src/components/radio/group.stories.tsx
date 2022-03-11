import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioGroup } from '../../../../binyal/src/components';

export default {
  title: 'Components/Radio',
  component: RadioGroup,
  argTypes: {
    size: {
      name: 'Size',
      description: 'Set the size of radio',
      defaultValue: 'medium',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select',
      },
    },
    style: {
      name: 'Style',
      description: 'Set the style of radio',
      defaultValue: 'primary',
      options: ['flat', 'primary', 'warning', 'danger'],
      control: {
        type: 'select',
      },
    },
    name: {
      name: 'Name',
      description: 'The name attribute specifies a name for an HTML element',
      defaultValue: undefined,
      type: 'string',
    },
    className: {
      name: 'ClassName',
      description: 'Set the class for config radio',
      defaultValue: undefined,
      type: 'string',
    },
    value: {
      name: 'Value',
      description: 'the value of an radio element',
      defaultValue: undefined,
      type: 'string',
    },
    gap: {
      name: 'Gap',
      description: 'space of radio content',
      defaultValue: undefined,
      type: 'number',
    },
    options: {
      name: 'Options',
      description: "[{ key: '', name: '', value: '', disabled: false }...]",
      defaultValue: undefined,
      type: 'symbol',
    },
    setValue: {
      name: 'SetValue',
      description: 'Set the handler to handle change event',
      defaultValue: undefined,
      action: 'SetValue',
    },
  },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args} />
);

export const Group = Template.bind({});
Group.args = {
  name: 'binyal',
  gap: 16,
  options: [
    {
      key: 'love_binyal',
      name: 'Love Binyal',
      value: 'love_binyal',
    },
    {
      key: 'like_binyal',
      name: 'Like Binyal',
      value: 'like_binyal',
    },
    {
      key: 'hate_binyal',
      name: 'Hate Binyal',
      value: 'hate_binyal',
      disabled: true,
    },
    {
      key: 'binyal',
      name: 'Binyal',
      value: 'binyal',
    },
  ],
};
