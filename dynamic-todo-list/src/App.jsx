

import { useState} from 'react'

import './App.css'

import {Flex,Input,Button,Grid,Select} from '@chakra-ui/react'

import { useSelector,useDispatch } from 'react-redux'
import { addTodo,deleteTodo,updateStatus,filterByStatus} from './app/todoSlice'

function App() {
  const[trackInputChange,setTrackInputChange]=useState('')
  
  const task = useSelector((state)=>state.todoSlice.todoHolderForUiRendering);
  const dispatch = useDispatch()

  return (
    <>
    
      <Flex justify='center' mt={4} gap={2}>
         <Input w='40%' border='1px' placeholder='Enter Task Name' onChange={(event)=>{
            setTrackInputChange(event.target.value)
         }}/>
          <Button bg='black' color='white' _hover={{color:"white"}} onClick={()=>{
             dispatch(addTodo({taskName:trackInputChange,status:'pending'}));
            //setTask(existingTask)
          }}>Add Task</Button>


          <Select variant='filled' 
          placeholder='Filter by Completion Status' w='30%' 
          onChange={(event)=>{
            dispatch(filterByStatus(event.target.value))
           }}>
          <option value="AllTasks">Show All Tasks</option>
          <option value='pending' style={{color:"#FF6500",fontWeight:"600"}}>Show Pending Tasks</option>
          <option value='completed' style={{color:"lightseagreen",fontWeight:"600"}}>Show Completed Tasks</option>
         </Select> {/**handle filter */}


      </Flex> {/** this flex holds input for enter task name and add task button */}

      <Grid templateColumns='repeat(3,30%)' columnGap={10} mt={10} rowGap={10} justifyContent='center'>
      {
        task.map((EachTask,index)=>(
          < Task_display
           deleteTodo={deleteTodo}
           key={index} EachTask={EachTask}
          task={task} updateStatus={updateStatus} />
        ))
      }
      </Grid>
    </>
  )
}

const Task_display=({EachTask,task,deleteTodo,updateStatus})=>{

  const[displayMarkAsCompletedButton,setDisplayMarkAsCompletedButton]=useState('hide')
  const dispatch = useDispatch()

   const parentGrid_style={
    borderRadius:'10px',
    boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
    h:'auto',
    p:'20px',
    rowGap:'2px'
   }


   
  return(
    <>
    <Grid sx={parentGrid_style} bg={EachTask.status=='pending'?'#FF6500':'lightseagreen'}>
    {
      displayMarkAsCompletedButton=='hide'?(
        <>
        <Flex gap={6} align='center' justify='space-between'>
        <p style={{color:"white",fontSize:"20px"}}>{EachTask.taskName}</p>
        <Button w='30%' bg='black' color='white' onClick={()=>{setDisplayMarkAsCompletedButton('display')}}>edit</Button>
        </Flex>
         <Flex align='center' gap={1}>
          <p style={{fontWeight:"700"}}>Status :</p>
          <p style={{fontWeight:"500",color:"white"}}>{EachTask.status}</p>
         </Flex>
        </>
      ):(
        <>
       <p>{EachTask.taskName}</p>
       <Flex gap={3} mt={2}>
        <Button onClick={()=>{ 
          setDisplayMarkAsCompletedButton('hide')
          dispatch(updateStatus({task:EachTask.taskName}))
       }} >Mark As completed</Button>
        
        <Button onClick={ ()=>{ dispatch(deleteTodo({task:EachTask.taskName})) }}>Delete</Button>
        </Flex>
        </>
      )
    }
    </Grid>
    </>
  )

}

export default App
