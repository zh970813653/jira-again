import React from 'react'
import {Drawer} from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from 'redux-toolkit'
const ProjectModal = () => {
    const open = useSelector((state:RootState) => state.projectReducer.modalStatus)
  return (
    <Drawer width={'100%'} forceRender={true} open={open}>
        11
    </Drawer>
  )
}

export default ProjectModal
