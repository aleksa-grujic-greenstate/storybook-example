import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args: ButtonProps) => <Button {...args} />,
  args: {
    name: "Button",
    onClick: () => console.log("Button clicked"),
  },
};
