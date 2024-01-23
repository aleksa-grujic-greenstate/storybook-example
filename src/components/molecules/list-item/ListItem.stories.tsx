import { Meta, StoryObj } from "@storybook/react";
import ListItem, { ListItemProps } from "./ListItem";

const meta = {
  title: "Molecules/List item",
  component: ListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  render: (args: ListItemProps) => <ListItem {...args} />,
  args: {
    title: "List item",
    subtitle: "Subtitle",
    isDone: false,
    onDoneChange: () => console.log("List item clicked"),
  },
};
