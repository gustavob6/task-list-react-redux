import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    tasks:  [],
    loading : true,
    searched : '',
}


const ReducerTask = createSlice({
  name: 'tasks-reducer',
  initialState,
  reducers: {
    setTasks(state,action) {
      state.tasks = action.payload;
    },
    setLoading(state,action) {
      state.loading = action.payload;
    },
    setSearched(state,action){
        state.searched = action.payload
    },
  },
})

export const {setTasks, setLoading,setSearched} = ReducerTask.actions;
export default ReducerTask.reducer;