import { FC } from "react";
import styled from "styled-components";

const LogoPlaceholderWrapper = styled.div`
  width: 100px;
  height: 50px;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 4px;
`;

export type LogoPlaceholderProps = {
  name: string;
};
export const LogoPlaceholder: FC<LogoPlaceholderProps> = ({ name }) => {
  return <LogoPlaceholderWrapper>{name}</LogoPlaceholderWrapper>;
};
