import Navbar from './Navbar';
import Landing from './Landing';
import Home from './Home';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
