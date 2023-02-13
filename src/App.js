import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import { useContext, useEffect, useState } from 'react';
import UserContext from './UserContext';

function App() {
  const [mobile,setMobile] = useState(false)
  useEffect(() => {
    setMobile(window.innerWidth < 464)
  }, [])
  window.addEventListener('resize',() => setMobile(window.innerWidth < 464))
  return (
      <BrowserRouter>
      <UserContext.Provider value={{ mobile }}>
      <Routes>
      <Route path='/' element={<Home /> } />
      </Routes>
      </UserContext.Provider>
      </BrowserRouter>
  );
}

export default App;
