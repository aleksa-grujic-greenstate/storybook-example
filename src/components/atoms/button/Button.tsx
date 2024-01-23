import styled from "styled-components";

const ButtonWrapper = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export type ButtonProps = {
  name: string;
  onClick: () => void;
};

const Button = ({ name, onClick }: ButtonProps) => {
  return <ButtonWrapper onClick={onClick}>{name}</ButtonWrapper>;
};

export default Button;
