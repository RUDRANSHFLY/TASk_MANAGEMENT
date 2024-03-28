import { Task  } from "@/model/Task";
import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";


const initialTaskArray : Task[] = [] ;

export const taskSlice = createSlice({
    name : 'tasks',
    initialState : initialTaskArray,
    reducers : {
        addTask : (state , action : PayloadAction<Task>) => {
            state.push(action.payload);
        },

        deleteTask : (state , action : PayloadAction<string>) => {
            const index = state.findIndex(task => task.name === action.payload);
            if(index !== -1){
                state.splice(index,1);
            }
        },

        editTask : (state , action : PayloadAction<{taskName : string ; taskPriority : string ; taskStatus : string}>) => {
            const { taskName, taskStatus, taskPriority } = action.payload;
            const index = state.findIndex(task => task.name === taskName);
            if(index !== -1){
                state[index].status = taskStatus;
             state[index].priority = taskPriority;
            }
            
        },

       
    }
})

export const {addTask , deleteTask , editTask } = taskSlice.actions;


export const selectTasks = (state : RootState) => state.tasks;

export default taskSlice.reducer;