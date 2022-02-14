import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Loading as LoadingComponent } from "../../../../binyal/src/components";

export default {
  title: "Components/Loading",
  component: LoadingComponent,
  argTypes: {
    style: {
      name: "Style",
      description: "Set the style of button",
      defaultValue: "primary",
      options: ["flat", "primary", "warning", "danger"],
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof LoadingComponent>;

const Template: ComponentStory<typeof LoadingComponent> = (args) => (
  <div
    style={{
      display: "flex",
      justifyContent: "start",
    }}
  >
    <div
      style={{
        width: 200,
        height: 200,
        position: "relative",
      }}
    >
      <LoadingComponent {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  style: "primary",
};
