import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavbarMobile from './components/navbarmobile/Navbarmobile';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { useState } from 'react';
import Home from './views/home/Home';
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

//Blog Entries
import BlogEntry1 from './views/blogentri/1/Blogentri-1';
import BlogEntry2 from './views/blogentri/2/Blogentri-2';
import BlogEntry3 from './views/blogentri/3/Blogentri-3';
//Blog Entries

function App() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  }

  const handleViews = (event) => {
    navigate(`/${event.target.id}`)
    if (isOpen) {
      toggleSideBar();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleBlog = (event) => {
    navigate(`/${event.target.id}`)
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <Route path='/' element={<Home handleViews={handleViews} />} />
        <Route path='/servicios' element={<Services />} />
        <Route path='/infraestructura' element={<Infraestructura />} />
        <Route path='/monitoreo-backup' element={<MonitoreoBackup />} />
        <Route path='/management' element={<Management />} />
        <Route path='/software' element={<Software />} />
        <Route path='/capacitacion' element={<Capacitation />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/blog' element={<Blog handleBlog={handleBlog} />} />
        <Route path='/contacto' element={<Contact />} />

        /* Blog  Entries*/
        <Route path='/proveedor-de-tecnologia-vs-socio-tecnologico' element={<BlogEntry3 handleViews={handleViews} />} />
        <Route path='/que-son-las-best-practice' element={<BlogEntry2 handleViews={handleViews} />} />
        <Route path='/nautec' element={<BlogEntry1 handleViews={handleViews} />} />
        /* Blog  Entries*/

      </Routes>
      <Footer handleViews={handleViews} />
    </div>
  );
}

export default App;
