import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "../../../../binyal/src/components/select/select";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <>
    <Select {...args} onChange={(e) => console.log(e.target.value)} />
  </>
);

export const Demo = Template.bind({});
Demo.args = {
  options: [
    {
      key: "a",
      name: "a",
      value: "a",
    },
    {
      key: "b",
      name: "b",
      value: "b",
    },
  ],
  value: "b",
  // onBlur: (e) => console.log(e),
  // onFocus: () => console.log("onFocus"),
};
