import styled from "styled-components";

const SearchFieldWrapper = styled.input.attrs({ type: "text" })`
  padding: 8px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export type SearchFieldProps = {
  name: string;
  value: string;
  onChange: () => void;
};

export const SearchField = ({ name, value, onChange }: SearchFieldProps) => {
  return <SearchFieldWrapper name={name} value={value} onChange={onChange} />;
};
