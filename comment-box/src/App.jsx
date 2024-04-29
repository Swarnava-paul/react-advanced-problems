//hooks
import { useState } from 'react'
//css
import './App.css'

//packages
import {Grid,Text,Box,Button,Flex} from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  const commentsarray=[
    'Oh hi there, I am Mila Acuna, I am glad that you came here. I was living in San Marino, however now I live in Alekseyevka',
    'I wonder which nation lands first on Mars, I hope I can live to it to see it myself.',
    'You are troll and you are sarcastic all the time and it is impossible to talk with you about real issues.',
    'Is it so hard to say sorry when you have done a mistake? Why? Why can’t you just say sorry?',
    'Pointing your fingers is a very rude thing to do, especially when you don’t know a person.',
    'I really love car games and racing games, cool vehicles, nitro boosters, etc. Racing games are life!',
    'Which facility teaches following subject best? Asking for my friend.',
    'Mmmmm... Let me think about it first and I will let you know about my decision.',
    'I am taking my words back, you are very talented writer after all and your articles are amazing.',
    'Oh, no dear, you don’t have to take my word for it, there are countless sources that say exactly the same thing.',
    'Solving Rubik’s cube puzzle with single hand is real talent, very few people can do it.',
    'Which movie scared you the most? I think it was Japanese movies called Grudge, it shocked me!',
    'Just in case you need to strengthen your bones eat a lot of different milk-related products.'
  ]

  return (
    <>
     <Grid p={50} h='100vh'>
        <Grid overflowY='scroll' rowGap={12}>
           {
            commentsarray.map(i=>(
              <Comments key={i} i={i}/>
            ))
           }
        </Grid>
     </Grid>
    </>
  )
}

const Comments =  ({i})=>{
const[reply,setReply]=useState(0);
const[display,setDisplay]=useState('hide');
const[trackInputChange,setTrackInputChange]=useState('');
const[replyArray,setReplyArray]=useState([])
  return(
    <>
    {
      (display=='hide'?(
        <Grid w='97%'>
          <Text>{i}</Text>
          <Button color='blue' ml={5} w='7%'  bg='white' onClick={()=>{
            setDisplay('on')
          }}>{`${reply} replies`}</Button>
        </Grid>
      ):(
        <Grid h='80vh'>
           <Button w='12%' onClick={()=>{setDisplay('hide')}}>close</Button>
            <Text fontWeight='700'>{`Comment : ${i}`}</Text>

           {
            (replyArray.length==0?(
             <Flex align='center'>
              <input type="text" value={trackInputChange} style={{outline:'none',border:'1px solid black',width:'90%',height:'6vh'}} onChange={(e)=>{
                setTrackInputChange(e.target.value)
              }} />
              <Button onClick={()=>{
                let ar=[...replyArray];
                ar.push(trackInputChange);
                setReplyArray(ar)
                setReply(ar.length)
              }}>post reply</Button>
             </Flex>
          ):(
            <>
          
          {
            <Grid  overflowY='scroll' h='55vh' mt={3} rowGap={7}>
              <Text color='blue' fontWeight='700'>All Replies</Text>
              {
              
              replyArray.map(i=>(
                <>
                  <Text ml={100}>{`user${Math.random().toFixed(0)+Math.random().toFixed(0)} : ${i}`}</Text>
                 
                </>
              ))}
              </Grid>
          }
               <Flex align='center'>
              <input type="text" value={trackInputChange} style={{outline:'none',border:'1px solid black',width:'90%',height:'6vh'}} onChange={(e)=>{
                setTrackInputChange(e.target.value)
              }} />
              <Button onClick={()=>{
                let ar=[...replyArray];
                ar.push(trackInputChange);
                setReplyArray(ar)
                setReply(ar.length)
              }}>post reply</Button>
             </Flex>
          </>
          ))
           }
        </Grid>
      ))
    }
    </>
  )
}

export default App
