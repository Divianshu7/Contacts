import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login';
import Home from './pages/home';
import TopNav from './components/TopNav';
import Register from './pages/register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path="/home" element={
            <PrivateRoute>
              <><TopNav /><Home /></>
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
