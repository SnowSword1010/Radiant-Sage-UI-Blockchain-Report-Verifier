import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import logo from '../logos/Radiant_Sage.svg';



function CustomNavbar(props) {
  function handleSubmit(e) {
    e.preventDefault()
    const reportID = e.target.reportID.value;
    const reportTitle = e.target.reportTitle.value;
    const reportMessage = e.target.reportMessage.value;
    props.loadingState.setLoading(true);
    axios.post("http://localhost:5000/fetchRecord", {
      "reportID": reportID,
      "title": reportTitle,
      "reportMessage": reportMessage
    }).then((response) => {
      props.tableState.setTableData(response.data);
      props.loadingState.setLoading(false);
    })
  }
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Row>
          <Col xs={4}>
            <img src={logo} className="App-logo logo-style" alt="logo" />
            <Navbar.Brand href="#" className='title'>Report Verifier</Navbar.Brand>
          </Col>
          <Col xs={5}>
            <Form className="d-lg-flex report-form" onSubmit={handleSubmit}>
              <Form.Control
                name="reportID"
                as="input"
                type="search"
                placeholder="Report ID"
                className="me-2 report-id-input"
                aria-label="Search"
              />
              <Form.Control
                name="reportTitle"
                as="input"
                type="search"
                placeholder="Report Title"
                className="me-2 report-title-input"
                aria-label="Search"
              />
              <Form.Control
                name="reportMessage"
                as="input"
                type="search"
                placeholder="Message"
                className="me-2 report-message-input"
                aria-label="Search"
              />
              <Button className="report-search-btn" variant="outline-success" type="submit">Search</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;