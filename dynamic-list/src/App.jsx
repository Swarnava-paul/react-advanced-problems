import { useState ,useEffect} from 'react'

import './App.css'

function App() {
  const [task,setTask] = useState('')
  const[array,setArray]=useState([
    'Play Cricket',
    'Play Football',
    'Running',
    'Sleep',
    'Work',
    'Gardening',
    'Swiming',
    'Extra Reading',
    'Interview Prepration for Today'
   ])


useEffect(()=>{
let ar=[...array];
let filtered_for_delete= ar.filter(i=>(
  i!==task
))
setArray(filtered_for_delete)
},[task])

  return (
    <>
      <ul>
       {
        array.map(i=>(
          <List key={i} i={i} task={task} setTask={setTask}/>
        ))
       }
      </ul>
    </>
  )
}

const List = ({i,task,setTask})=>{

  const[display,setDisplay]=useState('hide')

  return(
    <>
    {
      (display=='hide'?(
        <div style={{display:'flex'}}>
          <input type="checkbox" onClick={()=>{setDisplay('on')}}/>
          <p>{i}</p>
        </div>
      ):(
        <div style={{display:'flex',gap:'5px',alignItems:'center'}}>
        <p>{i}</p>
        <button style={{height:'5vh'}} onClick={()=>{
          setTask(i)
        }}>Remove</button>
        </div>
      ))
    }
    </>
  )
}

export default App
