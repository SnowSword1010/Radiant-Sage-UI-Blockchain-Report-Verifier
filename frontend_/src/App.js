import logo from './logos/Radiant_Sage.svg';
import CustomNavbar from './components/CustomNavbar';
import CustomTable from './components/CustomTable';
import CustomPagination from './components/CustomPagination';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
  const [tableData, setTableData] = useState([{ queuemsgsid: "Dummy", title: "Dummy", messagedate: "Dummy", moreInfo: "Dummy", blockchainVerification: "Dummy" }])
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(30);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tableData.slice(indexOfFirstPost, indexOfLastPost);


  return (
    <div className="App">
      <CustomNavbar tableState={{ tableData, setTableData }} loadingState={{ loading, setLoading }}></CustomNavbar>
      <CustomTable currentTableData={currentPosts} tableState={{ tableData, setTableData }} loading={loading}></CustomTable>
      <CustomPagination
        currentPageState={{currentPage, setCurrentPage}}
        postsPerPage={postsPerPage}
        totalPosts={tableData.length}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
