"use client";

import styled from "@emotion/styled";

const StyledInput = styled.input`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};
  font-size: 16px;
  background-color: #1c3a57;
  color: #fff;
  border: 1px solid #334e68;
  border-radius: 8px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(29, 161, 242, 0.3);
  }
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
