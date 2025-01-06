import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main.jsx'
import Menu from './components/Menu/Menu.jsx'
import Osteo from './components/Osteo/Osteo.jsx';
import './App.scss'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Menu><Main /></Menu>} />
        <Route path="/osteo" element={<Menu><Osteo /></Menu>} />
        <Route path="/gym" element={<Main />} />
      </Routes>
      </>
  )
}
export default App;
