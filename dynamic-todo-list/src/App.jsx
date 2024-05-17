

import { useState } from 'react'

import './App.css'

import {Flex,Input,Button,Grid} from '@chakra-ui/react'

function App() {
  const[trackInputChange,setTrackInputChange]=useState('')
  const[task,setTask] = useState([])

  return (
    <>
      <Flex justify='center' mt={4} gap={2}>
         <Input w='40%' border='1px' placeholder='Enter Task Name' onChange={(event)=>{
            setTrackInputChange(event.target.value)
         }}/>
          <Button bg='black' color='white' _hover={{color:"white"}} onClick={()=>{
            let existingTask=[...task];
            existingTask.push({taskName:trackInputChange,status:'pending'});
            setTask(existingTask)
          }}>Add Task</Button>
      </Flex> {/** this flex holds input for enter task name and add task button */}

      <Grid templateColumns='repeat(3,30%)' columnGap={10} mt={10} rowGap={10} justifyContent='center'>
      {
        task.map((EachTask,index)=>(
          < Task_display key={index} EachTask={EachTask} task={task} setTask={setTask}/>
        ))
      }
      </Grid>
    </>
  )
}

const Task_display=({EachTask,task,setTask})=>{

  const[displayMarkAsCompletedButton,setDisplayMarkAsCompletedButton]=useState('hide')

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
           let taskArray=[...task];
           let desired_index= taskArray.filter(item=>(
            item.taskName==EachTask.taskName
           ))
           desired_index[0].status='completed';
           setTask(taskArray)
           setDisplayMarkAsCompletedButton('hide')
        }}>Mark As completed</Button>
        <Button onClick={()=>{
          let taskArray=[...task];
          let filtered=taskArray.filter(item=>(
            item.taskName!==EachTask.taskName
          ))
          setDisplayMarkAsCompletedButton('hide')
          setTask(filtered)
        }}>Delete</Button>
        </Flex>
        </>
      )
    }
    </Grid>
    </>
  )

}

export default App
