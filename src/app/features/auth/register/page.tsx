"use client";
import Button from "@/src/app/components/Button";
import Input from "@/src/app/components/Input";
import styled from "@emotion/styled";
import { useState } from "react";

const RegisterPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #0a2540; /* Fundo azul escuro */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 12px;
  background-color: #183a5a; /* Azul claro para o card */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* Sombra suave */
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

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }
    // Lógica de cadastro simulada
    console.log("Cadastro com:", { name, email, password });
  };

  return (
    <RegisterPageContainer>
      <Form onSubmit={handleRegister}>
        <h2
          style={{ textAlign: "center", marginBottom: "16px", color: "#fff" }}
        >
          Cadastro
        </h2>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Input
          type="password"
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit">Cadastrar</Button>
        <FooterText>
          Já tem uma conta? <a href="/features/auth/login">Faça login</a>
        </FooterText>
      </Form>
    </RegisterPageContainer>
  );
}
