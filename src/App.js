import logo from './logo.svg';
import './App.css';
// import resume14 from "../public/resume14.png"
import {Routes,Route} from "react-router-dom"
import { Navbar } from './components/Navbar';
import {Home} from "./components/Home";
import {Clothes} from "./components/Clothes"
import {Cloth} from "./components/Cloth"
import {Electronics} from "./components/Electronics"
import {Electro} from "./components/Electro";
import {Groceries} from "./components/Groceries";
import {Grocer} from "./components/Grocer"
import { Login } from './components/Login';
import { RequiedAuth } from './context/RequiedAuth';


function App() {
  return (
    <div className="App">

      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/clothes' element={<RequiedAuth><Clothes /></RequiedAuth>}/>
          <Route path='/clothes/:id' element={<RequiedAuth><Cloth /></RequiedAuth>} />
        
        <Route path='/electronics' element={<RequiedAuth><Electronics /></RequiedAuth>} />
        <Route path='/electronics/:id' element={<RequiedAuth><Electro /></RequiedAuth>} />
        
        <Route path='/grocries' element={<RequiedAuth><Groceries/></RequiedAuth>} />
        <Route path='/grocries/:id' element={<RequiedAuth><Grocer/></RequiedAuth>} />

        
      </Routes>
    </div>
  );
}

export default App;
