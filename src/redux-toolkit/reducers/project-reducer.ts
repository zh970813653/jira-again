import {createSlice} from '@reduxjs/toolkit'


export const projectSlice = createSlice({
    name: 'projectSlice',
    initialState: {
        modalStatus: false
    },
    reducers: {
        handlerOpenModal(state){
            debugger
            state.modalStatus = true
        },
        handlerCloseModal(state) {
            state.modalStatus = false
        }
    }
})

export const projectListActions = projectSlice.actions

export type ProjectState = ReturnType<typeof projectSlice.getInitialState>

