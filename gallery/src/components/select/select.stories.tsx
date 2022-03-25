import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from 'binyal';

export default {
  title: 'Components/Select',
  component: Select,
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
      description: 'Set the class for config button',
      defaultValue: undefined,
      type: 'string',
    },
    disabled: {
      name: 'Disable',
      description: 'Set status of button is disable',
      defaultValue: false,
      type: 'boolean',
    },
    tabIndex: {
      name: 'TabIndex',
      description:
        'The tabindex attribute specifies the tab order of an element',
      defaultValue: undefined,
      type: 'number',
    },
    autoFocus: {
      name: 'AutoFocus',
      description: 'Get focus when the page loads',
      defaultValue: false,
      type: 'boolean',
    },
    autoComplete: {
      name: 'AutoComplete',
      description: 'An input field should have autocomplete on or off',
      defaultValue: 'on',
      options: ['on', 'off'],
      control: {
        type: 'select',
      },
    },
    placeholder: {
      name: 'Placeholder',
      description:
        'A short hint that describes the expected value of an input field',
      defaultValue: undefined,
      type: 'string',
    },
    required: {
      name: 'Required',
      description: 'Required',
      defaultValue: false,
      type: 'boolean',
    },
    value: {
      name: 'Value',
      description: 'the value of an input element',
      defaultValue: 'a',
      options: ['a', 'b', 'c'],
      control: {
        type: 'select',
      },
    },
    loading: {
      name: 'Loading',
      description: 'Set state of button is loading',
      defaultValue: false,
      type: 'boolean',
    },
    isClear: {
      name: 'IsClear',
      description: 'Clear value of select',
      defaultValue: false,
      type: 'boolean',
    },
    fill: {
      name: 'Fill',
      description: 'Option to fit button width to its parent width',
      defaultValue: false,
      type: 'boolean',
    },
    size: {
      name: 'Size',
      description: 'Set the size of button',
      defaultValue: 'medium',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select',
      },
    },
    style: {
      name: 'Style',
      description: 'Set the style of button',
      defaultValue: 'primary',
      options: ['flat', 'primary', 'warning', 'danger'],
      control: {
        type: 'select',
      },
    },
    setValue: {
      name: 'SetValue',
      description: 'Event change value',
      defaultValue: undefined,
      action: 'setValue',
    },
    options: {
      name: 'Options',
      description: 'Options of select',
      defaultValue: undefined,
      control: {
        type: '',
      },
    },
    onChange: {
      name: 'OnChange',
      description: 'Set the handler to handle change event',
      defaultValue: undefined,
      action: 'OnChange',
    },
    onBlur: {
      name: 'OnBlur',
      description: 'Set the handler to handle blur event',
      defaultValue: undefined,
      action: 'OnBlur',
    },
    onFocus: {
      name: 'OnFocus',
      description: 'Set the handler to handle focus event',
      defaultValue: undefined,
      action: 'OnFocus',
    },
  },
} as ComponentMeta<typeof Select>;

const options = [
  ...[
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'q',
    'w',
    'r',
    't',
    'y',
    'u',
    'i',
    'p',
  ].map((item) => ({
    key: item,
    name: `${item} is a number`,
    value: item,
  })),
];

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
export const Simple = Template.bind({});
Simple.args = {
  options: [...options],
  value: 'b',
  clear: true,
};
