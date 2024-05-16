import { Button } from "@chakra-ui/react"
import {useContext } from "react"
//context

import { component_determine_context } from "../context/component-context"

export const Payment=()=>{

    //context
    const{dispatch}=useContext(component_determine_context)
  
  
    return(
      <>
          <p style={{textAlign:'center',fontSize:"24px",fontWeight:"700",marginTop:"20px"}}>Payment</p>
  
      <div style={{width:"100%",margin:"auto",display:"flex",justifyContent:"center",marginTop:"10px"}}>
  
      <Button onClick={()=>{
        dispatch({type:"payment-completed"})
      }} fontSize="16px"borderRadius="5px" height="7vh" border="none" backgroundColor="black" color="white" width={['50%','30%','20%','20%']}>Pay</Button>
      </div>
      </>
    )
  }