import logo from './logos/Radiant_Sage.svg';
import CustomNavbar from './components/CustomNavbar';
import CustomTable from './components/CustomTable';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
  const [tableData, setTableData] = useState([{queuemsgsid: "Dummy", title: "Dummy", messagedate: "Dummy", moreInfo: "Dummy", blockchainVerification: "Dummy"}])
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Report Verifier</div>
      </div>
      <CustomNavbar tableState={{tableData, setTableData}}></CustomNavbar>
      <CustomTable tableData={tableData}></CustomTable>
    </div>
  );
}

export default App;
