import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import GreetUser from './components/GreetUser';
import { Profile } from './components/Profile';
import Welcome from './components/Welcom';
import Walk from './components/Walk';
import Counter from './components/Counter';
import Resume from './components/Resume';
import EventHandle from './components/EventHandle';
import FunctionalCounter from './components/FunctionalCounter';
import ConditionalComponent from './components/ConditionalComponent';
import Objectz from './components/Objectz';
import ChangeButtonColor from './components/ChangeButtonColor';
import ElementVariable from './components/ElementVariable';
import FetchingDummyData from './components/FetchingDummyData';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Hello/>
      <ChangeButtonColor></ChangeButtonColor>
      <Form></Form>
      <Message></Message>
      <GreetUser></GreetUser>
      <Profile></Profile>
      <Welcome firstName="Maxwell " lastName="Barde"/>
      <Walk placeToWork="street"></Walk>
      <Counter />
      <Resume name="Renan"></Resume>
      <EventHandle></EventHandle>
      <FunctionalCounter></FunctionalCounter>
      <ConditionalComponent></ConditionalComponent>
      <Objectz></Objectz>
      <ElementVariable></ElementVariable>
      <FetchingDummyData></FetchingDummyData>
      <Form></Form>
    </div> 
  );
}

export default App;


