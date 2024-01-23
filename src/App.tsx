import "./App.css";
import PageLayout from "./components/templates/page-template/PageTemplate";
import { TaskListProps } from "./components/organisms/task-list/TaskList";

const tasks: TaskListProps["tasks"] = [
  {
    id: "1",
    title: "Task 1",
    subtitle: "Subtitle 1",
    isDone: false,
  },
  {
    id: "2",
    title: "Task 2",
    subtitle: "Subtitle 2",
    isDone: false,
  },
  {
    id: "3",
    title: "Task 3",
    subtitle: "Subtitle 3",
    isDone: false,
  },
  {
    id: "4",
    title: "Task 4",
    subtitle: "Subtitle 4",
    isDone: false,
  },
  {
    id: "5",
    title: "Task 5",
    subtitle: "Subtitle 5",
    isDone: false,
  },
  {
    id: "6",
    title: "Task 6",
    subtitle: "Subtitle 6",
    isDone: false,
  },
  {
    id: "7",
    title: "Task 7",
    subtitle: "Subtitle 7",
    isDone: false,
  },
  {
    id: "8",
    title: "Task 8",
    subtitle: "Subtitle 8",
    isDone: false,
  },
  {
    id: "9",
    title: "Task 9",
    subtitle: "Subtitle 9",
    isDone: false,
  },
  {
    id: "10",
    title: "Task 10",
    subtitle: "Subtitle 10",
    isDone: false,
  },
  {
    id: "11",
    title: "Task 11",
    subtitle: "Subtitle 11",
    isDone: false,
  },
  {
    id: "12",
    title: "Task 12",
    subtitle: "Subtitle 12",
    isDone: false,
  },
  {
    id: "13",
    title: "Task 13",
    subtitle: "Subtitle 13",
    isDone: false,
  },
  {
    id: "14",
    title: "Task 14",
    subtitle: "Subtitle 14",
    isDone: false,
  },
  {
    id: "15",
    title: "Task 15",
    subtitle: "Subtitle 15",
    isDone: false,
  },
];
function App() {
  return (
    <>
      <PageLayout
        tasks={tasks}
        logoName="Logo"
        isDone={false}
        searchName="Search:"
        searchValue=""
        onDoneChange={() => {}}
        onSearchChange={() => {}}
      />
    </>
  );
}

export default App;
