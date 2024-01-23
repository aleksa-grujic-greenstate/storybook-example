import { FC } from "react";
import styled from "styled-components";

const LogoPlaceholderWrapper = styled.div`
  width: 100px; // Example size, adjust as needed
  height: 50px; // Example size, adjust as needed
  background-color: #ddd; // Example color, adjust as needed
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px; // Example size, adjust as needed
`;

export type LogoPlaceholderProps = {
  name: string;
};
export const LogoPlaceholder: FC<LogoPlaceholderProps> = ({ name }) => {
  return <LogoPlaceholderWrapper>{name}</LogoPlaceholderWrapper>;
};
