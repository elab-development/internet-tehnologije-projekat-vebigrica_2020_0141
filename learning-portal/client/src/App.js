import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from './pages/common/login/Login';
import Register from './pages/common/register/Register';

import ProtectedRoute from './components/ProtectedRoute';
import LoaderSpinner from './components/LoaderSpinner';

import logo from './logo.svg';
import './App.css';

function App() {
  const { loading } = useSelector((state) => state.loader);
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
           {/* User Routes */}
           <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

           {/* Admin Routes */}
           <Route
            path='/admin/exams'
            element={
              <ProtectedRoute>
                <Exams />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin/exams/add'
            element={
              <ProtectedRoute>
                <AddEditExam />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin/exams/edit/:id'
            element={
              <ProtectedRoute>
                <AddEditExam />
              </ProtectedRoute>
            }
          />
       
       </Routes>
    </BrowserRouter>
    
    
    </>
 



  );
}

export default App;
