import './App.css';
import ResponsiveAppBar from './NavMenu';
import React, {useState, useEffect} from 'react';
import Logo from './Images/TrubbleMilad - Gold.png'

function App() {
  const [isShowingAlert, setShowingAlert] = useState(false);
  useEffect(() => {
    console.log('asldkfj');
    setTimeout(() => {
      setShowingAlert(true);
    });
});

  return (
    <div className="App">
      <div className={`alert alert-success ${isShowingAlert ? 'alert-shown' : 'alert-hidden'}`}>
        <ResponsiveAppBar className="NavBar"/>
      </div>
      <header className="App-header">
        <img src={Logo} alt="logo" class='mainlogo'/>
        {/* <h1>Anthony Milad</h1> */}
      </header>
    </div>
  );
}

export default App;
