import { Meta, StoryObj } from "@storybook/react";
import Header, { HeaderProps } from "./Header";

const meta = {
  title: "Molecules/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: (args: HeaderProps) => <Header {...args} />,
  args: {
    logoName: "Header",
    isDone: false,
    onDoneChange: () => console.log("Header clicked"),
    searchName: "Search Field",
    searchValue: "",
    onSearchChange: () => console.log("Search Field changed"),
  },
};
