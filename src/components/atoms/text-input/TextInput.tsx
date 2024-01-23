import styled from "styled-components";

const TextInputWrapper = styled.input<{ $styleType: string }>`
  display: block;
  margin: 5px 0;
  color: #333;
  ${({ type }) =>
    type === "title" &&
    `
    font-weight: bold;
    font-size: 1.2em;
  `}
  ${({ type }) =>
    type === "subtitle" &&
    `
    font-size: 1em;
  `}
`;

export type TextInputProps = {
  children: string;
  styleType?: "title" | "subtitle";
  value?: string;
  onChange?: () => void;
  disabled?: boolean;
};

export const TextInput = ({
  children,
  styleType = "title",
}: TextInputProps) => {
  return <TextInputWrapper $styleType={styleType}>{children}</TextInputWrapper>;
};
