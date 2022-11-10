import './App.css';
import {Button,H4,P,Div} from './libs'
import axios from 'axios'
import useSWR from 'swr'
const fetcher = url => axios.get(url).then(r => r.data)
function App() {
  const {data,error} = useSWR("/posts", fetcher)
  if (error) return <P color="red">Error:{error.message}</P>
  if (!data) return <P>Loading...</P>
  console.log(data)
  return (
    <div className="App">
      <H4 color="red">Users</H4>
      {
        data.map((item,index) => <Div key={index}>
          <P>{item.text}</P>
        </Div>)
      }
      <Button onClick={()=>{
        axios.post("/users/login",{
          username:"long",password:"123"
        })
      }} variant="contained" bg="black">Click me</Button>
      <P>Nice</P>
    </div>
  );
}

export default App;
