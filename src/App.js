import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ex00 from './views/Ex00'; /* jsx 는 생략가능 // 앞쪽 ex00은 내가 원하는 이름으로 */
import Ex01 from './views/Ex01';
import Ex02 from './views/Ex02';
import Ex03 from './views/Ex03';
import Ex04 from './views/Ex04';
import Ex06 from './views/Ex06';
import Ex07 from './views/Ex07';


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
          <Route path='/Ex06' element={<Ex06 />} />
          <Route path='/Ex07' element={<Ex07 />} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;