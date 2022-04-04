import './App.css';
import ResponsiveAppBar from './NavMenu';
import React, {useState, useEffect} from 'react';

function App() {
  const [isShowingAlert, setShowingAlert] = useState(false);
  useEffect(() => {
    console.log('asldkfj');
    setTimeout(() => {
      setShowingAlert(true);
    }, 700);
  });

  return (
    <div className="App">
      <div className={`alert alert-success ${isShowingAlert ? 'alert-shown' : 'alert-hidden'}`}>
        <ResponsiveAppBar className="NavBar"/>
      </div>
      <header className="App-header">
        <h1 onClick={() => setShowingAlert(true)}>Anthony Milad</h1>
      </header>
    </div>
  );
}

export default App;
