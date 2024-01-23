import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputProps } from "./TextInput";

const meta = {
  title: "Atoms/Text Input",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: (args: TextInputProps) => <TextInput {...args} />,
  args: {
    name: "Text Input",
    type: "text",
    placeholder: "Placeholder",
  },
};
