import './App.css';
import Logo from './Images/Logo-1024.png'

function Home() {
  return (
    <div>
        <header className="App-header">
            <img src={Logo} alt="logo" class='mainlogo'/>
        </header>

        {/* Body goes here */}
    </div>
  );
}

export default Home;