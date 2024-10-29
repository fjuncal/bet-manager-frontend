"use client";

import styled from "@emotion/styled";
import { useState } from "react";

const LoginPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #0a2540; /* Azul-escuro para o fundo */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 12px;
  background-color: #183a5a; /* Azul um pouco mais claro que o fundo */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* Sombra suave */
  max-width: 400px;
  width: 100%;
`;

const Input = styled.input`
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

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: #198fd8;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
  &:hover {
    background-color: #1481c3;
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #bcccdc;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(2)};
  a {
    color: #1da1f2;
    text-decoration: none;
    font-weight: bold;
  }
`;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <LoginPageContainer>
      <Form onSubmit={handleLogin}>
        <h2
          style={{ textAlign: "center", marginBottom: "16px", color: "#fff" }}
        >
          Login
        </h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
        <FooterText>
          Não tem conta? <a href="/features/auth/register">Cadastre-se</a>
        </FooterText>
      </Form>
    </LoginPageContainer>
  );
}
