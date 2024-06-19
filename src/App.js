import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavbarMobile from './components/navbarmobile/Navbarmobile';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { useState } from 'react';
import Home from './views/home/Home';
import AboutUs from './views/aboutus/Aboutus';
import Footer from './components/footer/Footer'
import { useNavigate } from 'react-router-dom';
import Services from './views/services/Services'
import Infraestructura from './views/infraestructura/Infraestructura'
import MonitoreoBackup from './views/monitoreoBackup/MonitoreoBackup'
import Management from './views/management/Management'
import Software from './views/software/Software'
import Capacitation from './views/capacitation/Capacitation'
import Nosotros from './views/aboutus/Aboutus'
import Blog from './views/blog/Blog'
import Contact from './views/contact/Contact'

function App() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  }

  const handleViews = (event) => {
    navigate(`/${event.target.id}`)
    if(isOpen){
      toggleSideBar();
  }
}

  return (
    <div className={!isOpen ? "App" : "hidden"}>
      <NavbarMobile toggleSideBar={toggleSideBar} handleViews={handleViews} />
      <Navbar handleViews={handleViews} />
      {isOpen ?
        <Sidebar handleViews={handleViews} toggleSideBar={toggleSideBar} />
        :
        <></>
      }
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/servicios' element={<Services />} />
        <Route path='/infraestructura' element={<Infraestructura />} />
        <Route path='/monitoreo-backup' element={<MonitoreoBackup />} />
        <Route path='/management' element={<Management />} />
        <Route path='/software' element={<Software />} />
        <Route path='/capacitacion' element={<Capacitation />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contacto' element={<Contact />} />
      </Routes>
      {/* <Footer handleViews={handleViews} /> */}
    </div>
  );
}

export default App;
