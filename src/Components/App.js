import Landing from './Landing';
import Home from './Home';
import PlayerComparison from './PlayerComparison';
import ClubComparision from './ClubComparison';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/player" element={<PlayerComparison/>} />
          <Route path="/club" element={<ClubComparision/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
