import { useRequest } from 'ahooks';
import { Result, Table ,TableProps} from 'antd'
import type { ColumnsType } from 'antd/es/table';
import Pin from 'components/pin';
import moment from 'moment';
import React from 'react'
import { Link } from 'react-router-dom';
import { editProject } from 'requst/project';
import { SelectUser, TableListType } from 'types/project';

interface Props extends TableProps<TableListType> {
  users: SelectUser[],
  refresh: ()=> void
}


const TableList = (props: Props) => {
    const {users, ...result} = props
    // const {run,data,mutate} = useRequest(()=>editProject(),{manual:true})
    const handlerCheckedChange = async (project:TableListType,value: boolean)  => {
      await editProject({
        id: project.id,
        pin: !project.pin
      })
      props.refresh() 
    } 
  return (
    <Table 
        pagination={false}
        rowKey={'id'} 
        columns={[
            {
              title:<Pin checked={true}></Pin>,
              render(value,project) {
                return (
                  <Pin checked={project.pin} onCheckedChange={(e) => handlerCheckedChange(project,e)}></Pin>
                )
              }
            },
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
