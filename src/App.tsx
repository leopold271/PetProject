import './App.css';
import TodosList from './components/todos/todos';
import Navbar from './components/navbar/navbar';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Weather from './components/weather/weather';
import PomodoroTimer from './components/pomodoroTimer/pomodoroTimer';


function App() {
  return (

    <div>
      <TodosList />
      <Weather />
      <PomodoroTimer />
    </div>

  );
}

export default App;
