import styled from "styled-components";
import { Checkbox } from "../../atoms/checkbox/Checkbox";
import { Text } from "../../atoms/text/Text";

const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eee;
  min-width: 300px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
`;

const TitleWrapper = styled.div`
  margin-left: 10px;
`;

export type ListItemProps = {
  title: string;
  subtitle: string;
  isDone: boolean;
  onDoneChange: () => void;
};

const ListItem = ({ title, subtitle, isDone, onDoneChange }: ListItemProps) => (
  <ListItemWrapper>
    <TitleWrapper>
      <Text type="title">{title}</Text>
      <Text type="subtitle">{subtitle}</Text>
    </TitleWrapper>
    <Checkbox name="Done" checked={isDone} onChange={onDoneChange} />
  </ListItemWrapper>
);

export default ListItem;
