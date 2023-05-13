import styled from "@emotion/styled";
import React, { useState } from "react";
import { Button,Input } from "antd";
import IdSelect from "components/id-select";
import { SelectUser, TableListType } from "types/project";
import { useRequest } from "ahooks";
import { getSelectUser, getTableList } from "requst/project";
import TableList from "./TableList/TableList";
import { useUrlQueryParam } from "hooks/project/project";
import ProjectModal from "./ProjectModal/ProjectModal";
import { useDispatch } from "react-redux";
import { projectActions } from "redux-toolkit/actions/project-action";
const ProjectListScreen = () => {
  const [urlParams,setUrlParams] = useUrlQueryParam(['name','personId'])
  const dispatch = useDispatch()
  const handlerChangeInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await setUrlParams({
      name: e.target.value
    });
    refresh()
  };
  const { loading:tableLoading, data:tableList,refresh } = useRequest(() => getTableList({ name: urlParams.name, personId: urlParams.personId }))
  const {data:userList} = useRequest(()=> getSelectUser())


  const handlerSelectChange = async (value: any) => {
    await setUrlParams({
      personId: value
    })
    refresh()
    
  }

  return (
    <Container>
      <ProjectTitle>
        <h1>项目列表</h1>
        <Button type="link" onClick={()=>dispatch(projectActions.handlerOpenModal())}>创建项目</Button>
      </ProjectTitle>

      <ProjectScreen>
        <Input
          className="screen-input"
          value={urlParams.name}
          onChange={handlerChangeInput}></Input>
        <IdSelect className="select" options={userList?.data} onChange={(e) => handlerSelectChange(e)} defaultOptionName="负责人" value={urlParams.personId || 0}></IdSelect>
      </ProjectScreen>

      <TableList dataSource={(tableList?.data as TableListType[]) || []} users={userList?.data as SelectUser[] || []} loading={tableLoading}></TableList>

      <ProjectModal />
    </Container>
  );
};

const Container = styled.div`
  padding: 28px;
  box-sizing: border-box;
`;

const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectScreen = styled.div`
  margin-bottom: 20px;
  .screen-input {
    width: 180px;
    margin-right: 15px;
  }
  .select {
    width: 100px;
  }
`;

export default ProjectListScreen;
