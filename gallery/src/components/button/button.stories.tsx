import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../../../../binyal/src/components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    className: {
      name: "ClassName",
      description: "Set the class for config button",
      defaultValue: undefined,
      type: "string",
    },
    type: {
      name: "Type",
      description: "The type attribute specifies the type of button",
      defaultValue: "button",
      options: ["button", "submit", "reset"],
      control: {
        type: "select",
      },
    },
    disabled: {
      name: "Disable",
      description: "Set status of button is disable",
      defaultValue: false,
      type: "boolean",
    },
    tabIndex: {
      name: "TabIndex",
      description:
        "The tabindex attribute specifies the tab order of an element",
      defaultValue: undefined,
      type: "number",
    },
    loading: {
      name: "Loading",
      description: "Set state of button is loading",
      defaultValue: false,
      type: "boolean",
    },
    children: {
      name: "Children",
      description: "ReactNode",
      defaultValue: undefined,
      type: "string",
    },
    icon: {
      name: "Icon",
      description: "ReactNode",
      defaultValue: undefined,
      type: "symbol",
    },
    href: {
      name: "Href",
      description:
        "The href attribute specifies the URL of the page the link goes to",
      defaultValue: undefined,
      type: "string",
    },
    target: {
      name: "Target",
      description:
        "The target attribute specifies where to open the linked document.",
      defaultValue: undefined,
      type: "string",
    },
    size: {
      name: "Size",
      description: "Set the size of button",
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      control: {
        type: "select",
      },
    },
    style: {
      name: "Style",
      description: "Set the style of button",
      defaultValue: "primary",
      options: ["flat", "primary", "warning", "danger"],
      control: {
        type: "select",
      },
    },
    fill: {
      name: "Fill",
      description: "Option to fit button width to its parent width",
      defaultValue: false,
    },
    shape: {
      name: "Shape",
      description: "Can be set button shape",
      defaultValue: "round",
      options: ["round", "circle"],
      control: {
        type: "select",
      },
    },
    outline: {
      name: "Outline",
      description: "The type attribute specifies the type of button",
      defaultValue: false,
      type: "boolean",
    },
    onClick: {
      name: "OnClick",
      description: "Set the handler to handle click event",
      defaultValue: undefined,
      action: "clicked",
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloBinyal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloBinyal.args = {
  className: undefined,
  type: Button.type.button,
  disabled: false,
  tabIndex: 1,
  loading: false,
  children: "Hello Binyal",
  icon: <FontAwesomeIcon icon={faCoffee} />,
  href: undefined,
  target: undefined,
  size: Button.size.medium,
  style: Button.style.primary,
  fill: true,
  shape: Button.shape.round,
  outline: false,
  onClick: action("clicked"),
};

export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  type: Button.type.button,
  icon: <FontAwesomeIcon icon={faArrowAltCircleLeft} />,
  size: Button.size.medium,
  style: Button.style.primary,
  shape: Button.shape.circle,
};

export const Link = Template.bind({});
Link.args = {
  children: "Redirect to Binyal",
  href: "https://github.com/Binh-NA/binyal",
  target: "_blank",
  size: Button.size.medium,
  type: undefined,
};

export const LinkOutline = Template.bind({});
LinkOutline.args = {
  children: "Redirect to Binyal",
  href: "https://github.com/Binh-NA/binyal",
  target: "_blank",
  size: Button.size.medium,
  type: undefined,
  outline: true,
};
