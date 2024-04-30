import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [country,setCountry] = useState('India')
const contriesarray=[
  {
    name:'India',
    value:'IN',
    cities:['Brindavan','Delhi','Kolkata',"Mumbai",'Gujrat']
  },
  {
    name:'USA',
    value:'US',
    cities:['Caroline','Denver','California',"Los Angeles",'Las Vegas']
  },
  {
    name:'Russia',
    value:'RU',
    cities:['Moscow','St PetersBurg','Kazan',"OMSK"]
  },
]

const onlyCountriesName=contriesarray.map(i=>(
  i.name
));

  return (
    <>
    <select style={{width:'30%'}} onChange={(e)=>{setCountry(e.target.value)}}>
      {
        onlyCountriesName.map(i=>(
          <option key={i} value={i}>{i}</option>
        ))
      }
    </select>

    <DynamicSelect array={contriesarray} country={country}/>
    </>
  )
}

const DynamicSelect = ({array,country})=>{

let selected_country_index= array.filter(i=>(
  i.name==country
))


  return(
    <>
    <select>
    {
        selected_country_index[0].cities.map(i=>(
          <option key={i} value={i}>{i}</option>
        ))
      }
    </select>
    </>
  )
}
export default App
