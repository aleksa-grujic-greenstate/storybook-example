import styled from "styled-components";

const TextWrapper = styled.span<{ type: string }>`
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

export type TextProps = {
  children: string;
  type?: "title" | "subtitle";
};
export const Text = ({ children, type = "title" }: TextProps) => {
  return <TextWrapper type={type}>{children}</TextWrapper>;
};
