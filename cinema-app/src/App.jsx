import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Booking from '../src/pages/Booking';
import Header from '../src/components/Header';
import Popular from '../src/pages/Popular';
import { ToastContainer } from 'react-toastify';
import './index.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </Router>
  );
};
export default App;