import { Meta, StoryObj } from "@storybook/react";
import TaskList, { TaskListProps } from "./TaskList";

const meta = {
  title: "Molecules/Task list",
  component: TaskList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof TaskList>;

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
  render: (args: TaskListProps) => <TaskList {...args} />,
  args: {
    tasks: generateTasks(5),
    onDoneChange: () => console.log("Task list clicked"),
  },
};
