import './App.scss';
import TodosList from './components/todos/todos';
import {
  BrowserRouter as Router,
  Route, Redirect
} from "react-router-dom";
import Weather from './components/weather/weather';
import PomodoroTimer from './components/pomodoroTimer/pomodoroTimer';
import SideBar from './components/sideBar/sideBar';
import EditProfile from './components/profile/profile';
import Clock from './components/Clock/clock';


function App() {
  return (
    <main className='body'>
      <Router>
        <SideBar />
        <Clock/>
        <Route exact path='/home'>
          <Redirect to='/home'/>
          <TodosList />
          <Weather />
          <PomodoroTimer />
        </Route>
        <Route path='/profile'>
          <EditProfile />
        </Route>
      </Router>
    </main>

  );
}

export default App;
