import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import GreetUser from './components/GreetUser';
import { Profile } from './components/Profile';
import Welcome from './components/Welcom';
import Walk from './components/Walk';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Hello/>
      <Message></Message>
      <GreetUser></GreetUser>
      <Profile></Profile>
      <Welcome firstName="Maxwell " lastName="Barde"/>
      <Walk placeToWork="street"></Walk>
      <Counter />
    </div> 
  );
}

export default App;


