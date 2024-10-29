"use client";
import styled from "@emotion/styled";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 14px;
    padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  }
`;

export default Button;
