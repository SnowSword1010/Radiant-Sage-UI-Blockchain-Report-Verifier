import Table from 'react-bootstrap/Table';
import MoreInfoModal from './MoreInfoModal';
import BlockchainVerificationModal from './BlockchainVerificationModal';

function CustomTable(props) {
    function handleReportIDClick(e){
        let tempArr = props.tableState.tableData;
        console.log("Old table data");
        console.log(props.tableState.tableData);
        tempArr.sort((a,b) => {
            return a.queuemsgsid - b.queuemsgsid;
        });

        props.tableState.setTableData(tempArr);
        console.log("New table data");
        console.log(props.tableState.tableData);
    }

    function handleTitleClick(){
        return;
    }

    function handleMessageDateClick(){
        return;
    }

    if(props.loading){
        return <h2>Loading...</h2>
    }

    return (
        <Table striped>
            <thead>
                <tr>
                    <th onClick={handleReportIDClick}>Report ID</th>
                    <th onClick={handleTitleClick}>Title</th>
                    <th onClick={handleMessageDateClick}>Message Date</th>
                    <th>More Info</th>
                    <th>Blockchain Verification</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.currentTableData.map(request => {
                        return (
                            <tr>
                                <td>{request.queuemsgsid}</td>
                                <td>{request.title}</td>
                                <td>{request.messagedate}</td>
                                <td><MoreInfoModal info={request}></MoreInfoModal></td>
                                <td><BlockchainVerificationModal info={request}></BlockchainVerificationModal></td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </Table>
    );
}

export default CustomTable;