import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/common/login/Login';
import Register from './pages/common/register/Register';



import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className='App'>
      <div className='h-screen bg-primary'>
        <h1 className='color-secondary'>Learning Portal</h1>
      </div>
    </div>
    <BrowserRouter>
       <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
       </Routes>
    </BrowserRouter>
    
    
    </>
 



  );
}

export default App;
