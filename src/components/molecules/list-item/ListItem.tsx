import styled from "styled-components";
import { Checkbox } from "../../atoms/checkbox/Checkbox";
import { Text } from "../../atoms/text/Text";

const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
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
    <Checkbox name="Done" checked={isDone} onChange={onDoneChange} />
    <TitleWrapper>
      <Text type="title">{title}</Text>
      <Text type="subtitle">{subtitle}</Text>
    </TitleWrapper>
  </ListItemWrapper>
);

export default ListItem;
