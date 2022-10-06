import './App.css';
import {Routes, Route} from 'react-router-dom'

import Main from './components/Main';
import About from './components/About';

function App() {
  return (
    <div >
      <h1>Welcome to React Router!</h1>
      
      {/* 
        Routes : 여러 Route 들을 감싸서 그 중 요청된 라우트 하나만 렌더링 해준다 
          Q. Switch? : Routes의 예전 방식!
      */}
      <Routes>
        {/* Route 필수 속성 2가지 : 
            path(경로), element(컴포넌트) */}
        <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
