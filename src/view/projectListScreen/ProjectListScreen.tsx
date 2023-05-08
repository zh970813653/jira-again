import styled from '@emotion/styled'
import React from 'react'
import { Button, Card, Divider, Typography } from "antd";
const ProjectList = () => {
  return (
    <Container>
      <ProjectTitle>
        <h1>项目列表</h1>
        <Button type="link">创建项目</Button>
      </ProjectTitle>
    </Container>
  )
}

const Container = styled.div`
  padding: 28px;
  box-sizing: border-box
`

const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default ProjectList
