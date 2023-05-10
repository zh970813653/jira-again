import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Button, Card, Divider, Input, Typography } from "antd";
import IdSelect from "components/id-select";
import { SelectUser, TableListType } from "types/project";
import { useRequest } from "ahooks";
import { getSelectUser, getTableList } from "requst/project";
import TableList from "./TableList/TableList";
import { useUrlQueryParam } from "hooks/project/project";
const ProjectListScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [urlParams,setUrlParams] = useUrlQueryParam(['name,personId'])
  console.log(urlParams );
  
  const handlerChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const { loading:tableLoading, data:tableList } = useRequest(() =>
    getTableList({ name: undefined, personId: undefined })
  );
  
  const {data:userList} = useRequest(()=> getSelectUser())


  const handlerSelectChange = (value: any) => {
    console.log(value);
    
  }

  return (
    <Container>
      <ProjectTitle>
        <h1>项目列表</h1>
        <Button type="link">创建项目</Button>
      </ProjectTitle>

      <ProjectScreen>
        <Input
          className="screen-input"
          value={inputValue}
          onChange={handlerChangeInput}
        ></Input>
        <IdSelect className="select" options={userList?.data} onChange={(e) => handlerSelectChange(e)} defaultOptionName="负责人"></IdSelect>
      </ProjectScreen>

      <TableList dataSource={(tableList?.data as TableListType[]) || []} users={userList?.data as SelectUser[] || []} loading={tableLoading}></TableList>
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
