import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/common/login/Login';
import Register from './pages/common/register/Register';

import ProtectedRoute from './components/ProtectedRoute';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    
    <BrowserRouter>
       <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
       
       </Routes>
    </BrowserRouter>
    
    
    </>
 



  );
}

export default App;
