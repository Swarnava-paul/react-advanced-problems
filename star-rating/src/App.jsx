import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import {Flex} from '@chakra-ui/react'
function App() {
const[backgroundColor,setBackgroundColor]=useState([])
const[countStar,setCountStar]=useState(0);
const[valueOfStarButton,setValueOfStarButton]=useState([1,2,3,4,5])
const dummy=[0,1,2,3,4];



  return (
  <>
   <Flex justify='center' height='20vh' align='center' fontSize={50} gap={3}>
  {
    valueOfStarButton.map((value,index)=>(
      <Starrating key={index}   setCountStar={setCountStar} value={value} index={index} backgroundColor={backgroundColor}/>
    ))
  }
  </Flex>
 <Operation countStar={countStar} dummy={dummy}  setBackgroundColor={setBackgroundColor}/>
  </>
  
);
}

const Operation=({countStar,dummy,setBackgroundColor})=>{

 useEffect(()=>{
  
  let ar=dummy.map(function(i){
    if(i<countStar){
      return 'red'
    }
  })

  setBackgroundColor(ar)
 },[countStar])

 return null;
}

const Starrating=({setCountStar,value,backgroundColor,index})=>{


  function setvalueOfCount(valueonClick){
    setCountStar(valueonClick)
  }
  return(
    <>

    <i style={{color:backgroundColor[index],cursor:"pointer"}} title={`Give Rating ${value}`} className="fa-solid fa-star" onClick={()=>{
      setvalueOfCount(value)
  
     }}></i>
    </>
  )
}
export default App;
