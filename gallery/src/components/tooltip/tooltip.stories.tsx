import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tooltip from "../../../../binyal/src/components/tooltip";
import { Flex } from "../../../../binyal/src/components";
import { Placement } from "../../../../binyal/src/common/placement";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    className: {
      name: "ClassName",
      description: "Set the class for config checkbox",
      defaultValue: undefined,
      type: "string",
    },
    size: {
      name: "Size",
      description: "Set the size of checkbox",
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      control: {
        type: "select",
      },
    },
    style: {
      name: "Style",
      description: "Set the style of checkbox",
      defaultValue: "primary",
      options: ["flat", "primary", "warning", "danger"],
      control: {
        type: "select",
      },
    },
    placement: {
      name: "Placement",
      description: "Set the placement of tooltip",
      options: [
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
      ],
      control: {
        type: "select",
      },
    },
    title: {
      name: "Title",
      description: "`string` | `react element`",
      type: "symbol",
    },
    children: {
      name: "Children",
      description: "`react element`",
      type: "symbol",
    },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  children: <span>Binyal</span>,
  title: "I Love Binyal",
};

const TemplateAll: ComponentStory<typeof Tooltip> = (args) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 64,
      marginTop: 64,
      marginBottom: 64,
    }}
  >
    {[
      Tooltip.placement.topStart,
      Tooltip.placement.top,
      Tooltip.placement.topEnd,
      Tooltip.placement.leftEnd,
      "",
      Tooltip.placement.rightEnd,
      Tooltip.placement.left,
      "",
      Tooltip.placement.right,
      Tooltip.placement.leftStart,
      "",
      Tooltip.placement.rightStart,
      Tooltip.placement.bottomStart,
      Tooltip.placement.bottom,
      Tooltip.placement.bottomEnd,
    ].map((key) =>
      key ? (
        <div
          key={key}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tooltip
            title={
              <Flex direction={Flex.direction.col} alignItems="between">
                <span>I Love Binyal</span>
                <span>Binyal is my life</span>
              </Flex>
            }
            placement={key as Placement}
          >
            <span>Hover Binyal</span>
          </Tooltip>
        </div>
      ) : (
        <div></div>
      )
    )}
  </div>
);
export const All = TemplateAll.bind({});
All.args = {};
