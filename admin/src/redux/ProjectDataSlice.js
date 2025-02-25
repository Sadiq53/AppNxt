import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    project : []
}

const ProjectDataSlice = createSlice({
    name: "projectDataSlice",

    initialState,
    reducers : {
        resetState : (state) =>{
            
        },
    }
})

export default ProjectDataSlice.reducer;
export const {resetState} = ProjectDataSlice.actions;