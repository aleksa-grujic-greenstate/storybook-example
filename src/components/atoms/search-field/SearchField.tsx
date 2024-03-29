import { ChangeEventHandler } from "react";
import styled from "styled-components";

const LabelWrapper = styled.label`
  display: block;
  margin: 10px;
`;
const SearchFieldWrapper = styled.input.attrs({ type: "text" })`
  padding: 8px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export type SearchFieldProps = {
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const SearchField = ({ name, value, onChange }: SearchFieldProps) => {
  return (
    <LabelWrapper>
      {name}
      <SearchFieldWrapper name={name} value={value} onChange={onChange} />
    </LabelWrapper>
  );
};
