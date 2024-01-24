import styled from "styled-components";

const LabelWrapper = styled.label`
  display: block;
  margin: 10px;
`;

const CheckboxWrapper = styled.input.attrs({ type: "checkbox" })`
  margin: 10px;
`;

const LabelText = styled.p`
  margin: 10px;
  color: green;
`;
export type CheckboxProps = {
  name: string;
  checked: boolean;
  onChange: () => void;
};

export const Checkbox = ({ name, checked, onChange }: CheckboxProps) => {
  return (
    <LabelWrapper>
      <LabelText>{name}</LabelText>
      <CheckboxWrapper name={name} checked={checked} onChange={onChange} />
    </LabelWrapper>
  );
};
