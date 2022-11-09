import './App.css';
import {Button,H4,P,Div} from './libs'
import axios from 'axios'
import useSWR from 'swr'
const fetcher = url => axios.get(url).then(r => r.data)
function App() {
  const {data,error} = useSWR("https://3001-sangltv-texpress-2lb3h358kn3.ws-us75.gitpod.io/posts", fetcher)
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
      <Button variant="contained" bg="black">Click me</Button>
      <P>Nice</P>
    </div>
  );
}

export default App;
