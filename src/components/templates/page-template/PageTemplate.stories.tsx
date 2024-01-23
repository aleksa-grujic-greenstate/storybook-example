import { Meta, StoryObj } from "@storybook/react";
import PageLayout, { PageLayoutProps } from "./PageTemplate";
import { TaskListProps } from "../../organisms/task-list/TaskList";

const meta = {
  title: "Templates/Page template",
  component: PageLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof PageLayout>;

const generateTasks = (count: number) => {
  const tasks: TaskListProps["tasks"] = [];
  for (let i = 0; i < count; i++) {
    tasks.push({
      id: `${i}`,
      title: `Task ${i}`,
      subtitle: `Description ${i}`,
      isDone: false,
    });
  }
  return tasks;
};
export const Default: Story = {
  render: (args: PageLayoutProps) => <PageLayout {...args} />,
  args: {
    tasks: generateTasks(5),
    onDoneChange: () => console.log("Task list clicked"),
    logoName: "Logo",
    isDone: false,
    searchName: "Search:",
    searchValue: "",
    onSearchChange: () => {},
  },
};
