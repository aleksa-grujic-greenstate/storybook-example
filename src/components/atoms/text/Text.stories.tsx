import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

const meta = {
  title: "Atoms/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: (args: TextProps) => <Text {...args} />,
  args: {
    children: "Text",
    type: "title",
  },
};
