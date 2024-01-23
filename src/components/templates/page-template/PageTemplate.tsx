import styled from "styled-components";
import Header, { HeaderProps } from "../../molecules/header/Header";
import TaskList, { TaskListProps } from "../../organisms/task-list/TaskList";

const PageWrapper = styled.div`
  text-align: center;
  min-width: 100%;
  min-height: 100vh;
`;

export type PageLayoutProps = HeaderProps & TaskListProps & { isDone: boolean };
const PageLayout = ({
  tasks,
  logoName,
  onDoneChange,
  onSearchChange,
  searchName,
  searchValue,
  isDone,
}: PageLayoutProps) => (
  <PageWrapper>
    <Header
      logoName={logoName}
      onDoneChange={onDoneChange}
      onSearchChange={onSearchChange}
      searchName={searchName}
      searchValue={searchValue}
      isDone={isDone}
    />
    <TaskList tasks={tasks} onDoneChange={onDoneChange} />
  </PageWrapper>
);

export default PageLayout;
