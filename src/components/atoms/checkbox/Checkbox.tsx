import styled from "styled-components";

const CheckboxWrapper = styled.input.attrs({ type: "checkbox" })`
  margin: 10px;
`;

export type CheckboxProps = {
  name: string;
  checked: boolean;
  onChange: () => void;
};

export const Checkbox = ({ name, checked, onChange }: CheckboxProps) => {
  return <CheckboxWrapper name={name} checked={checked} onChange={onChange} />;
};
