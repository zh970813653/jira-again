import { configureStore } from "@reduxjs/toolkit"
import {projectSlice} from './reducers/project-reducer'

export const store = configureStore({
    reducer: {
        projectReducer: projectSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
