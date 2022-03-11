import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../../../../binyal/src/components/input/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/Input',
  component: Input,
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
    type: {
      name: 'Type',
      description: 'The type attribute specifies the type of input',
      defaultValue: 'text',
      options: [
        'text',
        'number',
        'email',
        'hidden',
        'password',
        'search',
        'url',
      ],
      control: {
        type: 'select',
      },
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
    maxLength: {
      name: 'MaxLength',
      description: 'Maximum number of characters',
      defaultValue: undefined,
      type: 'number',
    },
    minLength: {
      name: 'MinLength',
      description: 'Minimum number of characters',
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
    readOnly: {
      name: 'ReadOnly',
      description: 'Readonly',
      defaultValue: false,
      type: 'boolean',
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
      defaultValue: undefined,
      type: 'string',
    },
    defaultValue: {
      name: 'DefaultValue',
      description: 'the default value of an input element',
      defaultValue: undefined,
      type: 'string',
    },
    loading: {
      name: 'Loading',
      description: 'Set state of button is loading',
      defaultValue: false,
      type: 'boolean',
    },
    iconLeft: {
      name: 'IconLeft',
      description: 'ReactNode',
      defaultValue: undefined,
      type: 'symbol',
    },
    iconRight: {
      name: 'IconRight',
      description: 'ReactNode',
      defaultValue: undefined,
      type: 'symbol',
    },
    fill: {
      name: 'Fill',
      description: 'Option to fit button width to its parent width',
      defaultValue: false,
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
    onEnter: {
      name: 'OnEnter',
      description: 'Set the handler to handle enter event',
      defaultValue: undefined,
      action: 'OnEnter',
    },
    onChange: {
      name: 'OnChange',
      description: 'Set the handler to handle change event',
      defaultValue: undefined,
      action: 'OnChange',
    },
    onKeyPress: {
      name: 'OnKeyPress',
      description: 'Set the handler to handle keypress event',
      defaultValue: undefined,
      action: 'OnKeyPress',
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
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  defaultValue: "I'm Binyal",
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  defaultValue: "I'm Binyal",
  iconLeft: <FontAwesomeIcon icon={faRobot} />,
};

export const IconRight = Template.bind({});
IconRight.args = {
  defaultValue: "I'm Binyal",
  iconRight: <FontAwesomeIcon icon={faRobot} />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  defaultValue: "I'm Binyal",
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  defaultValue: "I'm Binyal",
  readOnly: true,
};

export const Fill = Template.bind({});
Fill.args = {
  defaultValue: "I'm Binyal",
  fill: true,
};
