import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Flex from "../../../../binyal/src/components/flex";

export default {
  title: "Components/Flex",
  component: Flex,
  argTypes: {
    direction: {
      name: "Direction",
      description: "Set the direction of the flexible items",
      defaultValue: "row",
      options: ["row", "col"],
      control: {
        type: "select",
      },
    },
    alignItems: {
      name: "AlignItems",
      description:
        "The align-items property specifies the default alignment for items inside the flexible container",
      defaultValue: "stretch",
      options: ["stretch", "start", "center", "end", "between"],
      control: {
        type: "select",
      },
    },
    justifyContent: {
      name: "JustifyContent",
      description:
        "The justify-content property aligns the flexible container's items when the items do not use all available space on the main-axis",
      defaultValue: "stretch",
      options: ["stretch", "start", "center", "end", "between"],
      control: {
        type: "select",
      },
    },
    gap: {
      name: "Gap",
      description: "space content",
      defaultValue: undefined,
      type: "number",
    },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>
    {[1, 2, 3].map((item) => (
      <div
        key={item}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "var(--by-binyal-color-6)",
        }}
      ></div>
    ))}
  </Flex>
);

export const Simple = Template.bind({});
Simple.args = {
  gap: 16,
};
