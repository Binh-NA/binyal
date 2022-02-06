import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../../../../binyal/src/components/button/button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Binyal/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  children: "Hello world!",
  fill: true,
  shape: Button.shape.round,
  size: Button.size.medium,
  style: Button.style.primary,
  tabIndex: 1,
  type: Button.type.button,
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  children: "Click me!",
};