import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/Layout/AppLayout';
import Home from './pages/Home/Home';
import Kana from './pages/Kana/Kana';
import Grammar from './pages/Grammar/Grammar';
import Reading from './pages/Reading/Reading';
import Speaking from './pages/Speaking/Speaking';
import Vocabulary from './pages/Vocabulary/Vocabulary';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/kana" element={<Kana />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
      </Route>
    </Routes>
  );
}

export default App;
