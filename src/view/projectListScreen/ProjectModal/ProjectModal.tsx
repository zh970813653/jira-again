import React from 'react'
import {Drawer} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux-toolkit'
import { projectActions } from 'redux-toolkit/actions/project-action'
const ProjectModal = () => {
    const open = useSelector((state:RootState) => state.projectReducer.modalStatus)
    const dispatch = useDispatch()
  return (
    <Drawer width={'100%'} forceRender={true} open={open} onClose={() => dispatch(projectActions.handlerCloseModal())}>
        11
    </Drawer>
  )
}

export default ProjectModal
