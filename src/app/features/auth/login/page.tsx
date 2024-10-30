"use client";

import Button from "@/src/app/components/Button";
import Input from "@/src/app/components/Input";
import { useAuth } from "@/src/app/contexts/AuthContext";
import styled from "@emotion/styled";
import { useState } from "react";

const LoginPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #0a2540;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 12px;
  background-color: #183a5a;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
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

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 1rem;
`;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { login } = useAuth();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error: any) {
      setError(
        error.message ||
          "Houve um problema com o sistema. Tente novamente mais tarde."
      );
    }
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
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <FooterText>
          Não tem conta? <a href="/features/auth/register">Cadastre-se</a>
        </FooterText>
      </Form>
    </LoginPageContainer>
  );
}
