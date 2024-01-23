import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";

const meta = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args: CheckboxProps) => <Checkbox {...args} />,
  args: {
    name: "Checkbox",
    checked: false,
    onChange: () => console.log("Checkbox clicked"),
  },
};
