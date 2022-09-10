import Table from 'react-bootstrap/Table';
import MoreInfoModal from './MoreInfoModal';

function CustomTable(props) {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>Report ID</th>
                    <th>Title</th>
                    <th>Message Date</th>
                    <th>More Info</th>
                    <th>Blockchain Verification</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.tableData.map(request => {
                        return (
                            <tr>
                                <td>{request.queuemsgsid}</td>
                                <td>{request.title}</td>
                                <td>{request.messagedate}</td>
                                <td><MoreInfoModal info={request}></MoreInfoModal></td>
                                <td>{request.blockchainVerification}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </Table>
    );
}

export default CustomTable;