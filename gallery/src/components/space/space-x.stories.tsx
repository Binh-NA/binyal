import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SpaceX as SX } from "../../../../binyal/src/components";

export default {
  title: "Components/Space",
  component: SX,
  argTypes: {
    size: {
      name: "Size",
      description: "Set the size of block",
      defaultValue: undefined,
      type: "number",
    },
  },
} as ComponentMeta<typeof SX>;

const TemplateSpaceX: ComponentStory<typeof SX> = (args) => (
  <div
    style={{
      display: "flex",
      justifyContent: "start",
    }}
  >
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: "pink",
      }}
    />
    <SX {...args} />
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: "pink",
      }}
    />
  </div>
);

export const SpaceX = TemplateSpaceX.bind({});
SpaceX.args = {
  size: 24,
};
