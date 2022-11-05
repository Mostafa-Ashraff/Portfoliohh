import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css';
import Home from './components/Home'
import ProjectDetails from "./components/ProjectDetails";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
//<Route path='/projects/:id' element={<ProjectDetails />} />