import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Welcome from './pages/Welcome'
import Agent from './pages/Agent';
import Home from './pages/Home'
import Owner from './pages/Owner'
import 'bootstrap/dist/css/bootstrap.min.css'; // import the CSS file


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path='/agent' element={<Agent />} />
        <Route path='/home' element={<Home />} />
        <Route path='/owner' element={<Owner />} />
      </Routes>
    </Router>
  );
}

export default App;
