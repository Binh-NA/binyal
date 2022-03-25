import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Range, Flex, SpaceX } from 'binyal';

export default {
  title: 'Components/Range',
  component: Range,
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
      description: 'Set the class for config checkbox',
      defaultValue: undefined,
      type: 'string',
    },
    size: {
      name: 'Size',
      description: 'Set the size of checkbox',
      defaultValue: 'medium',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select',
      },
    },
    style: {
      name: 'Style',
      description: 'Set the style of checkbox',
      defaultValue: 'primary',
      options: ['flat', 'primary', 'warning', 'danger'],
      control: {
        type: 'select',
      },
    },
    disabled: {
      name: 'Disable',
      description: 'Set status of checkbox is disable',
      defaultValue: false,
      type: 'boolean',
    },
    min: {
      name: 'Min',
      description: 'Min value of progress',
      defaultValue: undefined,
      type: 'number',
    },
    max: {
      name: 'Max',
      description: 'Max value of progress',
      defaultValue: undefined,
      type: 'number',
    },
    step: {
      name: 'Step',
      description: 'step of progress',
      defaultValue: undefined,
      type: 'number',
    },
    value: {
      name: 'Value',
      description: 'Value of progress',
      defaultValue: undefined,
      type: 'number',
    },
    setValue: {
      name: 'SetValue',
      description: 'Event change value',
      defaultValue: undefined,
      action: 'setValue',
    },
    onChange: {
      name: 'OnChange',
      description: 'Event change value',
      defaultValue: undefined,
      action: 'onChange',
    },
  },
} as ComponentMeta<typeof Range>;

const Template: ComponentStory<typeof Range> = (args) => {
  const [value, setValue] = React.useState<number | undefined>(
    args.value as number,
  );

  return (
    <Flex>
      <SpaceX size={100} />
      <Range
        {...args}
        value={value}
        setValue={(val) => {
          setValue(val as number);
          console.log(val);
        }}
      />
      <SpaceX size={100} />
    </Flex>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  value: 50,
};

const TemplateMultiple: ComponentStory<typeof Range> = (args) => {
  const [values, setValues] = React.useState<{
    start: number;
    end: number;
  }>({
    start: 25,
    end: 75,
  });

  return (
    <Flex>
      <SpaceX size={100} />
      <Range
        {...args}
        value={values}
        setValue={(val) => {
          setValues(
            val as {
              start: number;
              end: number;
            },
          );
          console.log(val);
        }}
        multiple
      />
      <SpaceX size={100} />
    </Flex>
  );
};

export const Multiple = TemplateMultiple.bind({});
Multiple.args = {};
