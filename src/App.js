import './App.css';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
        <Link to="/profile">Profile</Link>
        <Link to="/messages">Messages</Link>
      </div>
    </div>
  );
}

export default App;
