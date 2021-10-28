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
    <Router>
      <div>
        <Navbar />
        <Route path='/todos'>
          <TodosList />
        </Route>
        <Route path='/weather'>
          <Weather />
        </Route>
        <Route path='/pomodoro-timer'>
          <PomodoroTimer />
        </Route>
      </div>
    </Router>
  );
}

export default App;
