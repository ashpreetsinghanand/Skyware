
import react from 'react';
import {Routes,Route} from 'react-router-dom';
import Blog from './components/Blog';
import Carrer from './components/Carrer';
import Login from './components/Login';
import Rap from './Rap';

function App() {
  return (
    <>

    <Routes>
    <Route path="/" element={<Rap/>}></Route>
    <Route path="/Carrer" element={<Carrer/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/Blog" element={<Blog/>}></Route>
    </Routes>
  
    </>
  );
}

export default App;
