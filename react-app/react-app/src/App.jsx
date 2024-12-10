
import  Counter  from './Components/Counter';
import  StopWatch  from './Components/StopWatch';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import refex from './Components/refex'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Counter' element={<Counter/>}/>
        <Route path='/refex' element={<refex/>}/> 
        <Route path='/StopWatch' element={<StopWatch/>}/>
        <Route path='*' element={<h1>Not Available</h1>}/>
      </Routes>
  );
}

export default App;