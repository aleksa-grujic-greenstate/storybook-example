import { Meta, StoryObj } from "@storybook/react";
import { SearchField, SearchFieldProps } from "./SearchField";

const meta = {
  title: "Atoms/Search Field",
  component: SearchField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
  render: (args: SearchFieldProps) => <SearchField {...args} />,
  args: {
    name: "Search Field",
    value: "",
    onChange: () => console.log("Search Field changed"),
  },
};
