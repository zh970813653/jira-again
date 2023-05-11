import styled from "@emotion/styled";
import React from "react";
import { ReactComponent } from "./assets/software-logo.svg";
import { AuthContext } from "context/auth";
import { Button, Popover } from "antd";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import ProjectList from "view/projectListScreen/ProjectListScreen";
const ProjectApp = () => {
  return (
    <Container>
      <PageHeader />
      <Main>
          <Routes>
            <Route path={"/projects"} element={<ProjectList />}></Route>
            <Route path="/" element={<Navigate to="/projects" />} />
          </Routes>
      </Main>
    </Container>
  );
};

const PageHeader = () => {
  const { user, logout } = AuthContext();
  const handlerLogout = () => {
    logout();
  };
  return (
    <Header>
      <HeaderLeft>
        <ReactComponent
          width={"180px"}
          color={"rga(38,132,255)"}
        ></ReactComponent>
        <span style={{ margin: "0 15px" }}>项目</span>
        <span>用户</span>
      </HeaderLeft>

      <Popover
        content={
          <Button type="link" onClick={handlerLogout}>
            登出
          </Button>
        }
      >
        <Button type="link">Hi {user?.name}</Button>
      </Popover>
    </Header>
  );
};

const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  /* background: skyblue */
`;
const HeaderLeft = styled.div`
  display: flex;

  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Main = styled.div`
  flex: 1;
`;
export default ProjectApp;
