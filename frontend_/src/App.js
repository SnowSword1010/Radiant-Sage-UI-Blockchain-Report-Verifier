import logo from './logos/Radiant_Sage.svg';
import CustomNavbar from './components/CustomNavbar';
import bootstrap from 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Report Verifier</div>
      </div>
      <CustomNavbar></CustomNavbar>
    </div>
  );
}

export default App;
