import { Result, Table ,TableProps} from 'antd'
import type { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import React from 'react'
import { Link } from 'react-router-dom';
import { SelectUser, TableListType } from 'types/project';

interface Props extends TableProps<TableListType> {
  users: SelectUser[]
}


const TableList = (props: Props) => {
    const {users, ...result} = props
  return (
    <Table 
        pagination={false}
        rowKey={'id'} 
        columns={[
            {
                title: '名称',
                sorter: (a,b) =>a.name.localeCompare(b.name),
                // dataIndex: 'organization',
                render(value,project){
                    return (
                      <Link to={String(project.id)}>{project.name}</Link>
                    )
                }
            },
            {
              title: '部门',
              dataIndex: 'organization',
            },
            {
              title: '负责人',
              render(value,project) {
                return (
                  <div>{users.find(user => user.id === project.personId)?.name}</div>
                )
                
              }
            },
            {
              title: '创建时间',
              render(value,project){
                return(
                  <div>{moment(project.created).format('YYYY-MM-DD')}</div>
                )
              }
            },
            {
              title: '',
              render(value,project){
                return(
                  <div>...</div>
                )
              }
            }
        ]} 
        {...result  }
    >
      
    </Table>
  )
}

export default TableList
