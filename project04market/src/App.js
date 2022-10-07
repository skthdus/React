import './App.css';

import { Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import Products from './components/Products';
import Detail from './components/Detail';


function App() {
  return (
    

      <div>
      <Header/>  
    
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/detail:num' element={<Detail/>}></Route>
      </Routes>
      
    </div>
  
    
    
  );
}

export default App;
