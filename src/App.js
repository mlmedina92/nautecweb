import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavbarMobile from './components/navbarmobile/Navbarmobile';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { useState } from 'react';

function App() {
  // renderizado condicional
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <NavbarMobile toggleSideBar={toggleSideBar} />
      <Navbar/>
      {isOpen ?
        <Sidebar toggleSideBar={toggleSideBar}/>
        :
        <></>
      }

    </div>
  );
}

export default App;
