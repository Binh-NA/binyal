import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Radio } from "../../../../binyal/src/components";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    id: {
      name: "Id",
      description: "Used to specify a unique id for an HTML element",
      defaultValue: undefined,
      type: "string",
    },
    name: {
      name: "Name",
      description: "The name attribute specifies a name for an HTML element",
      defaultValue: undefined,
      type: "string",
    },
    className: {
      name: "ClassName",
      description: "Set the class for config radio",
      defaultValue: undefined,
      type: "string",
    },
    size: {
      name: "Size",
      description: "Set the size of radio",
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      control: {
        type: "select",
      },
    },
    style: {
      name: "Style",
      description: "Set the style of radio",
      defaultValue: "primary",
      options: ["flat", "primary", "warning", "danger"],
      control: {
        type: "select",
      },
    },
    fill: {
      name: "Fill",
      description: "Option to fit radio width to its parent width",
      defaultValue: false,
      type: "boolean",
    },
    disabled: {
      name: "Disable",
      description: "Set status of radio is disable",
      defaultValue: false,
      type: "boolean",
    },
    value: {
      name: "Value",
      description: "the value of an radio element",
      defaultValue: undefined,
      type: "string",
    },
    defaultChecked: {
      name: "DefaultChecked",
      description: "Set default value of radio is checked",
      defaultValue: false,
      type: "boolean",
    },
    label: {
      name: "Label",
      description: "the label of an check element",
      defaultValue: undefined,
      type: "string",
    },
    setChecked: {
      name: "SetChecked",
      description: "Event change value",
      defaultValue: undefined,
      action: "setChecked",
    },
    onChange: {
      name: "OnChange",
      description: "Set the handler to handle change event",
      defaultValue: undefined,
      action: "OnChange",
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => (
  <div>
    <Radio {...args} label="binyal 1" />
    <Radio {...args} label="binyal 2" />
  </div>
);

export const Simple = Template.bind({});
Simple.args = {
  // defaultChecked: true,
  name: "binyal",
};
