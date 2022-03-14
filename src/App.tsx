import "./App.css";
import Greet from "./components/Greet";
import { Person } from "./components/Person";
import PersonList from "./components/PersonList";
import Status from './components/Status'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Button from './components/Button'
import Input from './components/Input'
import Container from './components/Container'
import User from './components/User'

function App() {
  const personName = {
    first:'Bruce',
    last:'Wayne'
  }


  const nameList = [
    {
      first:'Clark',
      last:'Kent'
    },
    {
      first:'Princess',
      last:'Diana'
    }
  ]
  return (
    <div className="App">
      <Greet name={"Shafin"} messageCount={20} isLoggedIn={true} />
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status="error"/>
      {/* Passing Children */}
      <Heading>
        Hey I am heading
      </Heading>
      {/* Passing component as props */}
      <Oscar>
        <Heading>
          Oscar goes to London
        </Heading>
      </Oscar>

      <Button handleClick={(event,id)=>{
        console.log("Button Clicked", event,id)
      }} />

      <Input value="" handleChange={(event)=>console.log(event)}/>

      {/* Passing CSS Props */}
      <Container styles={{border:'1px solid black', padding:'1rem'}}/>

      <User/>

    </div>
  );
}

export default App;
