import React, { useState } from "react";
import styled from "@emotion/styled";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import logo from "../../assets/logo.svg";
import { Button, Card, Divider, Typography } from "antd";
import Login from "./login";
import Register from "./register";
const Auth = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const handlerChangeIsRegister = () => {
    setIsRegister(!isRegister)
  }
  return (
    <Container>
      <Header />
      <CardContainer>
        <Title>请登陆</Title>
        {isRegister ? <Register></Register>: <Login></Login>}
        <Divider></Divider>
        <Button onClick={handlerChangeIsRegister} type="link">{isRegister ? '已有账号了？ 去登陆' : '还没账号？快去注册吧'}</Button>
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${left}), url(${right});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: left bottom, right bottom;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;
const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

const CardContainer = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
`;

export default Auth;
