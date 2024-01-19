import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginContainer>
      <LoginForm>
        <Title>Milestone</Title>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Login</Button>
        <Link to="/signup">
          <Button2 type="button">Join Now</Button2>
        </Link>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 20px;
  background-color: white;
  padding: 40px;
  border-radius: 5px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Input = styled.input`
  padding: 15px;
  border: 2px solid #ddd;
  background-color: white;
  color: #333;
  border-radius: 5px;

  ::placeholder {
    color: #bbb;
  }
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  background-color: black;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(40, 40, 40);
  }
`;

const Button2 = styled.button`
  width: 18.8rem;
  padding: 15px;
  border-radius: 5px;
  background-color: white;
  color: black;
  border: 2px solid black;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(240, 240, 240);
  }
`;
