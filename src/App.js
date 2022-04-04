import './App.css';
import ResponsiveAppBar from './NavMenu';
import Logo from './Images/TrubbleMilad - Gold.png'

function App() {
  return (
    <div className="App">
      <div className={`alert alert-success alert-shown`}>
        <ResponsiveAppBar className="NavBar"/>
      </div>
      <header className="App-header">
        <img src={Logo} alt="logo" class='mainlogo'/>
      </header>

      
    </div>
  );
}

export default App;
