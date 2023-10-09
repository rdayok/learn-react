import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import GreetUser from './components/GreetUser';


function App() {
  return (
    <div className="App">
      <Hello/>
      <Message></Message>
      <GreetUser></GreetUser>
    </div> 
  );
}

export default App;


