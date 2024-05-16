import { useReducer } from "react";

import { createContext } from "react";
import { Details_filling } from "../App";
import { Register_phone } from "../App";
import { Payment } from "../App";
import { Completed } from "../App";
import { background } from "@chakra-ui/react";
export const component_determine_context = createContext('')

function determine_component(component,action){
 if(action.type=='details-filling-coompleted'){
    return{
        component:<Register_phone/>,
        backgroundColor:[...component.backgroundColor,'green']
    }
 }
 else if(action.type=="register-phone-completed"){
    return{
        component:<Payment/>,
        backgroundColor:[...component.backgroundColor,'green']
    }
 }
 else if(action.type=="previous-from-register-phone"){
   return{
    component:<Details_filling/>,
    backgroundColor:[]
   }
 }
 else if(action.type=="payment-completed"){
    return{
        component:<Completed/>,
        backgroundColor:[...component.backgroundColor,'green']
    }
 }
}

export const Component_context_provider=(props)=>{

const[component,dispatch]=useReducer(determine_component,{component:<Details_filling/>,backgroundColor:[]})

return(
<component_determine_context.Provider value={{component,dispatch}}>
    {props.children}
</component_determine_context.Provider>
)

}