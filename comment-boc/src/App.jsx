//hooks
import { useState } from 'react'
//css
import './App.css'

//packages
import {Grid,Text,Box,Button,Flex} from '@chakra-ui/react'

function App() {

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
    <Text textAlign='center' fontSize={28} fontWeight='700' textDecoration='underline'>Comment Box</Text>
    <Text textAlign='center'textDecoration='underline'>Make unlimited reply to any Comment</Text>


<Grid p={1} h='100vh' w='100%'>
        <Grid overflowY='scroll' rowGap={12} placeItems='center'>
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
const[trackInputChange,setTrackInputChange]=useState('');// track the inputed value
const[replyArray,setReplyArray]=useState([])// add replies in form of array of elements
  return(
    <>
  
    {
      (display=='hide'?(
        <Grid w='97%' textAlign='left' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' p={2} borderRadius={10}>
          <Text>{i}</Text>
          <Button color='blue' ml={5} w='7%' pos='static'  bg='white' onClick={()=>{
            setDisplay('on')
          }}>{`${reply} replies`}</Button> {/**initial state display will change */}
        </Grid>
      )// initial return ui
      :
      (
        <Grid position='absolute' top='0%' w='100%' h='100%' placeItems='center'  className='opacity'>
        <Grid h='80vh' mt='-3%' w={['90%','90%','80%','80%']} bg='white'  borderRadius={11}>
           <Button w='5%' onClick={()=>{setDisplay('hide')}} borderTopLeftRadius={11} fontSize={25} bg='white'><i className="fa-solid fa-xmark"></i></Button>
           {/** click on above button set the display state initial hide */}
            
            <Box w='90%' margin='auto'>
            <Text fontWeight='700'  fontStyle='italic' fontSize={20} color='blue'>{` ${i}`}</Text>
            </Box> {/** main comment holder Box */}

           {
            (replyArray.length==0?(
             <Flex align='center' justify='center'>
              <input type="text" value={trackInputChange} style={{outline:'none',border:'1px solid black',width:'60%',height:'6vh'}} onChange={(e)=>{
                setTrackInputChange(e.target.value)// track the inputed value 
              }} />
              <Button onClick={()=>{
                let ar=[...replyArray];
                ar.push(trackInputChange);
                setReplyArray(ar)
                setReply(ar.length)
              }} bg='black' color='white' borderRadius='0px' borderTopRightRadius={4} borderBottomRightRadius={4} _hover={{bg:"black"}} h='6vh'>post reply</Button>
              {/**on click on post reply button add the already tracked value to the setReplyArray with all existing replies to that comment */}
             </Flex>
          )// based on replyArray if length of replyArray is 0 that means there are no replies 
          :
          (
            <>
          
          {
            <Grid  overflowY='scroll' h='45vh' mt={3} rowGap={10}>
              <Text color='black' fontWeight='700' ml={3}>All Replies</Text>
              {
              
              replyArray.map(i=>(
                <>
                  <Text fontSize={19} ml={['10','10','10','100']}>{`user${Math.random().toFixed(0)+Math.random().toFixed(0)} : ${i}`}</Text>
                 
                </>
              ))}
              </Grid>
          }
               <Flex justify='center' align='center' >
              <input type="text" value={trackInputChange} style={{outline:'none',border:'1px solid black',width:'60%',height:'6vh'}} onChange={(e)=>{
                setTrackInputChange(e.target.value)
              }} />
              <Button onClick={()=>{
                let ar=[...replyArray];
                ar.push(trackInputChange);
                setReplyArray(ar)
                setReply(ar.length)
              }} bg='black' color='white' borderRadius='0px' borderTopRightRadius={4} borderBottomRightRadius={4} _hover={{bg:"black"}} h='6vh'>post reply</Button>
             </Flex>
          </>
          )) // if length of replyArray is more than 0 that means reply is there
           }
           
        </Grid>

        </Grid>
      ))// display state changed to on
    }

    </>
  )
}



export default App
