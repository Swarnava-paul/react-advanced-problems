import { useState} from 'react'

import './App.css'

function App() {

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




  return (
    <>
      <ul>
       {
        array.map(i=>(
          <List key={i} i={i} array={array} setArray={setArray}/>
        ))
       }
      </ul>
    </>
  )
}

const List = ({i,array,setArray})=>{

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
        <input type="checkbox" checked onClick={()=>{setDisplay('hide')}}/>
        <p>{i}</p>
        <button style={{height:'5vh'}} onClick={()=>{
            let ar=[...array];
            let filtered=ar.filter(item=>(
               item!==i
            ))
            setArray(filtered)
        }}>Remove</button>
        </div>
      ))
    }
    </>
  )
}

export default App
