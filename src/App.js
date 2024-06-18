import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavbarMobile from './components/navbarmobile/Navbarmobile';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { useState } from 'react';
import Home from './views/home/Home';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={!isOpen ? "App" : "hidden"}>
      <NavbarMobile toggleSideBar={toggleSideBar} />
      <Navbar/>
      {isOpen ?
        <Sidebar toggleSideBar={toggleSideBar}/>
        :
        <></>
      }
      <Routes>
      <Route path='/' element=  { <Home/> } />
      </Routes>
    </div>
  );
}

export default App;
