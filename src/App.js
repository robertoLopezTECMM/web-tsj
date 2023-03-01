import logo from './logo.svg';
import './App.css';
import Landing from './screens/landing/index';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter

} from 'react-router-dom';
import { MainRouter } from './navigation/mainRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
