import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './container/Home';
import CardDetailsPage from './container/CardDetailsPage'
import { Navbar } from './component/Navbar';
import Cart from './container/Cart';


function App() {
  return (
    <div className="App">
     <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="products/:id" element={<CardDetailsPage />} />
        </Routes>
     
      
     
    </div>
  );
}

export default App;
