import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Rating } from "../../../../binyal/src/components";
import Icon from "../../../../binyal/src/components/icon";

export default {
  title: "Components/Rating",
  component: Rating,
  argTypes: {
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
    direction: {
      name: "Direction",
      description: "Set the direction of the flexible items",
      defaultValue: "row",
      options: ["row", "col"],
      control: {
        type: "select",
      },
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
    icon: {
      name: "Icon",
      description: "React.ReactNode",
      defaultValue: false,
      type: "symbol",
    },
    emptyIcon: {
      name: "EmptyIcon",
      description: "React.ReactNode",
      defaultValue: false,
      type: "symbol",
    },
    setValue: {
      name: "SetValue",
      description: "Event change value",
      defaultValue: undefined,
      action: "setValue",
    },
  },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  name: "binyal",
  icon: <Icon symbol="star" />,
  emptyIcon: <Icon symbol="starBorder" />,
};
