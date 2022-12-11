import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './header/Header';
import Dashboard from './dashboard/Dashboard';
import Search from './search/Search';
import Library from './library/Library';

import Liked from './liked/Liked';
import Footer from './footer/Footer';


function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="search" element={<Search />} />
    <Route path="library" element={<Library />} />
    <Route path="liked" element={<Liked />} />
 
   
    
    </Routes>
    <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
