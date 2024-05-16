import { useState,useContext } from 'react'
import { Flex,Grid,Button,Input} from '@chakra-ui/react'
import './App.css'


// context 
import { component_determine_context } from './context/component-context'

function App() {

  const{component}=useContext(component_determine_context)
  
  return (
    <>
     <Stepper/>
    {
      component.component
    }
    </>
  )
}


const Stepper=()=>{

  const{component}=useContext(component_determine_context)
  const backgroundColor=component.backgroundColor;

  return(
    <>
    <div style={{display:'grid'}}>

    <Flex  justifyContent="center" alignItems='center' height='10vh' width={['100%','100%','100%','60%']} margin="auto" marginTop={5}>

        <Flex justifyContent="center" alignItems='center' border="1px" borderColor='black' width={['14%','8%','8%','8%']} height="90%" borderRadius="50%" backgroundColor={backgroundColor[0]}>
          {backgroundColor[0]=='green'?(<i style={{fontSize:"28px"}} className="fa-solid fa-check"></i>):<i style={{fontSize:"28px"}} className="fa-solid fa-list-check"></i>}
        </Flex>
        <div style={{border:"1px solid black",width:"28%",height:"1vh"}} className={backgroundColor[0]=='green'?'progress':''}></div>{/** details filling */}



        <Flex justifyContent="center" alignItems='center' border="1px" borderColor='black' width={['14%','8%','8%','8%']} height="90%" borderRadius="50%" backgroundColor={backgroundColor[1]}>
      {backgroundColor[1]=='green'?(<i style={{fontSize:"28px"}} className="fa-solid fa-check"></i>):<i style={{fontSize:'28px'}} className="fa-solid fa-square-phone"></i>}

        </Flex>
        <div style={{border:"1px solid black",width:"28%",height:"1vh"}} className={backgroundColor[1]=='green'?'progress':''}></div>{/**register phone */}



        <Flex justifyContent="center" alignItems='center' border="1px" borderColor='black' width={['14%','8%','8%','8%']} height="90%" borderRadius="50%" backgroundColor={backgroundColor[2]}>
        {backgroundColor[2]=='green'?(<i style={{fontSize:"28px"}} className="fa-solid fa-check"></i>):<i style={{fontSize:"28px"}} className="fa-solid fa-indian-rupee-sign"></i>}

          </Flex>{/**payment */}

    </Flex>

    <Flex width={['97%','80%','80%','51%']} margin="auto" justifyContent="space-between">
      <p>Details filling</p>
      <p>Register phone</p>
      <p>Payment</p>
    </Flex>

    </div>
    </>
  )
}

export default App
