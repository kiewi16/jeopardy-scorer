import { PlayerProvider } from '../../PlayerContext';
import '../App/App.css';
import { WelcomePage } from '../WelcomePage/WelcomePage';
import { JeopardyRound } from '../JeopardyRound/JeopardyRound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <PlayerProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/JeopardyRound" element={<JeopardyRound />} />
        </Routes>
      </Router>
    </PlayerProvider>

  )
}
export default App;