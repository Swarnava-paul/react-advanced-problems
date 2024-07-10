import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mainTodoHolder : [],
    todoHolderForUiRendering : []

}

const todoSlice = createSlice({
    name:'TODO-SLICE',
    initialState,
    reducers : {

        addTodo : (state,action)=>{
            state.mainTodoHolder.unshift(action.payload)
            state.todoHolderForUiRendering.unshift(action.payload)
        },

        deleteTodo: (state, action) => {
            const taskName = action.payload.task;
            state.mainTodoHolder = state.mainTodoHolder.filter(todo=>(todo.taskName !== taskName));
            state.todoHolderForUiRendering = state.mainTodoHolder;
        },

        updateStatus : (state,action) => {
           const taskName = action.payload.task;
           state.mainTodoHolder = state.mainTodoHolder.map(function(todo){
            if(todo.taskName == taskName) {
               todo.status = 'completed';
               return todo;
            }else {
               return todo;
            }
   
          })
           state.todoHolderForUiRendering = state.mainTodoHolder;
        },

       filterByStatus : (state,action)=> {
        if(action.payload == 'AllTasks') {
            state.todoHolderForUiRendering = state.mainTodoHolder;
        } else {
            state.todoHolderForUiRendering = state.mainTodoHolder.filter(todo=> todo.status === action.payload )
        }
       },
    }
})

export const {
addTodo,deleteTodo,
updateStatus,filterByStatus} = todoSlice.actions;

export default todoSlice.reducer;