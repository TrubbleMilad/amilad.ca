import './App.css';
import ResponsiveAppBar from './NavMenu';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Home'
import About from './About'
import Twitch from './Twitch'
import ExternalLink from './ExternalLink';

function App() {
  return (
    <div>
      <div className="App">
        <div className={`alert alert-success alert-shown`}>
          <ResponsiveAppBar className="NavBar"/>
        </div>
      </div>

      <Routes>
          <Route exact path='/' element={<Home />}> </Route>
          <Route path='About' element={<About />}> </Route>
          <Route
            path='Family'
            element={<ExternalLink name='Redirecting' link='https://family.amilad.ca' />}>
          </Route>
          <Route path='Twitch' element={<Twitch />}> </Route>
          
      </Routes>
    </div>
  );
}

export default App;