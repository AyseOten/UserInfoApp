import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home'
import Login from './components/login/Login'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
