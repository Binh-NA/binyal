import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggle } from 'binyal';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    id: {
      name: 'Id',
      description: 'Used to specify a unique id for an HTML element',
      defaultValue: undefined,
      type: 'string',
    },
    name: {
      name: 'Name',
      description: 'The name attribute specifies a name for an HTML element',
      defaultValue: undefined,
      type: 'string',
    },
    className: {
      name: 'ClassName',
      description: 'Set the class for config Toggle',
      defaultValue: undefined,
      type: 'string',
    },
    size: {
      name: 'Size',
      description: 'Set the size of Toggle',
      defaultValue: 'medium',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select',
      },
    },
    style: {
      name: 'Style',
      description: 'Set the style of Toggle',
      defaultValue: 'primary',
      options: ['flat', 'primary', 'warning', 'danger'],
      control: {
        type: 'select',
      },
    },
    fill: {
      name: 'Fill',
      description: 'Option to fit Toggle width to its parent width',
      defaultValue: false,
      type: 'boolean',
    },
    disabled: {
      name: 'Disable',
      description: 'Set status of Toggle is disable',
      defaultValue: false,
      type: 'boolean',
    },
    defaultChecked: {
      name: 'DefaultChecked',
      description: 'Set default value of Toggle is checked',
      defaultValue: false,
      type: 'boolean',
    },
    label: {
      name: 'Label',
      description: 'the label of an check element',
      defaultValue: undefined,
      type: 'string',
    },
    setChecked: {
      name: 'SetChecked',
      description: 'Event change value',
      defaultValue: undefined,
      action: 'setChecked',
    },
    onChange: {
      name: 'OnChange',
      description: 'Set the handler to handle change event',
      defaultValue: undefined,
      action: 'OnChange',
    },
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  defaultChecked: true,
};
