import styled from "styled-components";
import { Checkbox } from "../../atoms/checkbox/Checkbox";
import { LogoPlaceholder } from "../../atoms/logo-placeholder/LogoPlaceholder";
import {
  SearchField,
  SearchFieldProps,
} from "../../atoms/search-field/SearchField";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

export type HeaderProps = {
  logoName: string;
  isDone: boolean;
  onDoneChange: () => void;
  searchName: SearchFieldProps["name"];
  onSearchChange: SearchFieldProps["onChange"];
  searchValue: SearchFieldProps["value"];
};
const Header = ({
  logoName,
  isDone,
  onDoneChange,
  searchName,
  searchValue,
  onSearchChange,
}: HeaderProps) => (
  <HeaderWrapper>
    <LogoPlaceholder name={logoName} />

    <Checkbox name="Done" checked={isDone} onChange={onDoneChange} />
    <SearchField
      name={searchName}
      value={searchValue}
      onChange={onSearchChange}
    />
  </HeaderWrapper>
);

export default Header;
