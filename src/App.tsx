import './App.css';
import TodosList from './components/todos/todos';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Weather from './components/weather/weather';
import PomodoroTimer from './components/pomodoroTimer/pomodoroTimer';
import SideBar from './components/sideBar/sideBar';
import Profile from './components/profile/profile';


function App() {
  return (
    <main className='body'>
      <Router>
        <SideBar />
        <Route path='/home'>
          <TodosList />
          <Weather />
          <PomodoroTimer />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
      </Router>
    </main>

  );
}

export default App;
