import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ex00 from './views/Ex00'; /* jsx 는 생략가능 // 앞쪽 ex00은 내가 원하는 이름으로 */
import Ex01 from './views/Ex01';
import Ex02 from './views/Ex02';
import Ex03 from './views/Ex03';
import Ex04 from './views/Ex04';
import Ex05 from './views/Ex05';
import Ex06 from './views/Ex06';
import Ex07 from './views/Ex07';
import Ex08 from './views/Ex08';
import Ex09 from './views/Ex09';
import Ex10 from './views/Ex10';
import Ex11 from './views/Ex11';
import Ex12 from './views/Ex12';
import Ex13 from './views/Ex13';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/ex00' element={<Ex00 />} />  
          <Route path='/Ex01' element={<Ex01 />} />  
          <Route path='/Ex02' element={<Ex02 />} />
          <Route path='/Ex03' element={<Ex03 />} />
          <Route path='/Ex04' element={<Ex04 />} />
          <Route path='/Ex05' element={<Ex05 />} />
          <Route path='/Ex06' element={<Ex06 />} />
          <Route path='/Ex07' element={<Ex07 />} />
          <Route path='/Ex08' element={<Ex08 />} />
          <Route path='/Ex09' element={<Ex09 />} />
          <Route path='/Ex10' element={<Ex10 />} />
          <Route path='/Ex11' element={<Ex11 />} />
          <Route path='/Ex12' element={<Ex12 />} />
          <Route path='/Ex13' element={<Ex13 />} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;