import styled from "styled-components";
import ListItem from "../../molecules/list-item/ListItem";

const TaskListWrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export type TaskListProps = {
  tasks: {
    id: string;
    title: string;
    subtitle: string;
    isDone: boolean;
  }[];
  onDoneChange: () => void;
};
const TaskList = ({ tasks, onDoneChange }: TaskListProps) => (
  <TaskListWrapper>
    {tasks.map((task) => (
      <ListItem
        key={task.id}
        title={task.title}
        subtitle={task.subtitle}
        isDone={task.isDone}
        onDoneChange={onDoneChange}
      />
    ))}
  </TaskListWrapper>
);

export default TaskList;
