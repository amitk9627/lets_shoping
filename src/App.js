import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './container/Home';
import CardDetailsPage from './container/CardDetailsPage'
import ProtectedRoute from './ProtectedRoute';
import Cart from './container/Cart';
// import Contact from "./container/Contact";
import LoginPage from './LoginPage';
import Signup from './Signup';
import Profile from './container/Profile';
function App() {
  return (
    <div className="App">
      
    
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path='/signup'element={<Signup />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="products/:id" element={<ProtectedRoute><CardDetailsPage /></ProtectedRoute>} />
          {/* <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} /> */}
          <Route  path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>}  />

        </Routes>
     
      
     
    </div>
  );
}

export default App;
