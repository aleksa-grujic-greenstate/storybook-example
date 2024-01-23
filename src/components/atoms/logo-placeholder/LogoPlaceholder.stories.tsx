import { Meta, StoryObj } from "@storybook/react";
import { LogoPlaceholder, LogoPlaceholderProps } from "./LogoPlaceholder";

const meta = {
  title: "Atoms/Logo Placeholder",
  component: LogoPlaceholder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LogoPlaceholder>;

export default meta;
type Story = StoryObj<typeof LogoPlaceholder>;

export const Default: Story = {
  render: (args: LogoPlaceholderProps) => <LogoPlaceholder {...args} />,
  args: {
    name: "Logo",
  },
};
