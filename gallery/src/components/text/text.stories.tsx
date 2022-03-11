import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from '../../../../binyal/src/components/text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    className: {
      name: 'ClassName',
      description: 'Set the class for config text',
      defaultValue: undefined,
      type: 'string',
    },
    tabIndex: {
      name: 'TabIndex',
      description:
        'The tabindex attribute specifies the tab order of an element',
      defaultValue: undefined,
      type: 'number',
    },
    fill: {
      name: 'Fill',
      description: 'Option to fit text width to its parent width',
      defaultValue: false,
    },
    highlight: {
      name: 'Highlight',
      description: 'Make the text is highlight and follow style of this',
      defaultValue: false,
      type: 'boolean',
    },
    underline: {
      name: 'Underline',
      description: 'Make the text is underline',
      defaultValue: false,
      type: 'boolean',
    },
    delete: {
      name: 'Delete',
      description: 'Make the text is delete',
      defaultValue: false,
      type: 'boolean',
    },
    strong: {
      name: 'Strong',
      description: 'Make the text is strong',
      defaultValue: false,
      type: 'boolean',
    },
    italic: {
      name: 'Italic',
      description: 'Make the text is italic',
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
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  children: 'I love Binyal',
};

const TemplateStyle: ComponentStory<typeof Text> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Text style={Text.Style.flat}>Style is flat</Text>
    <Text style={Text.Style.primary}>Style is primary</Text>
    <Text style={Text.Style.warning}>Style is warning</Text>
    <Text style={Text.Style.danger}>Style is danger</Text>
  </div>
);
export const Style = TemplateStyle.bind({});
Style.args = {};

const TemplateSize: ComponentStory<typeof Text> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Text size={Text.size.large}>Size is large</Text>
    <Text size={Text.size.medium}>Size is medium</Text>
    <Text size={Text.size.small}>Size is small</Text>
  </div>
);
export const Size = TemplateSize.bind({});
Size.args = {};

const TemplateType: ComponentStory<typeof Text> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Text strong>Type is strong</Text>
    <Text italic>Type is italic</Text>
    <Text underline>Type is underline</Text>
    <Text delete>Type is delete</Text>
  </div>
);
export const Type = TemplateType.bind({});
Type.args = {};
