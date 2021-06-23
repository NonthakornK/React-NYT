import { Form, FormControl, Button, Table, Col, Card, CardColumns } from 'react-bootstrap';
import React from 'react';
import './App.css';
import './ResultModal';

class ResultCard extends React.Component {
  render() {
    return (
      <CardColumns>
      {this.props.results && this.props.results.map(result => {
        return (
          <Col>
            <Card style={{ width: '20rem', flex: '1'}}>
              <Card.Body>
                <Card.Title>{result.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{result.section}</Card.Subtitle>
                <Card.Text>{result.abstract}</Card.Text>
                <Card.Link href={result.url}>Details</Card.Link>
                {/* <Button variant="primary" onClick={this.openModal}>
                  Details
                </Button> */}
              </Card.Body>
            </Card>
          </Col>
        );})}
      </CardColumns>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      title: '',
      url: '',
      section: '',
      abstract: '',
      isOpen: false
    };
  }
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  componentDidMount() {
    // get all entities - GET
    const apiUrl = "https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=lrdtBEgyRk7LiRqsDzo1xE5Ys0AoibXJ"
    fetch(apiUrl, {
      method: "GET"
    })
      .then(response => response.json())
      .then((data) => {
        console.log('This is your data', data);
        console.log(data.results);
        this.setState({
          results: data.results
      })
      })
      .catch((error) => {
        console.log('This is your error', error);
      });
  } 

  render() {
    return( 
      <div className="App">
        <header className="App-header">
          <p>
            New York Times - Most Popular in 30 Days
          </p>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-md-2" htmlSize="40" />
          </Form>
        </header>
        <ResultCard results={this.state.results} />
      </div>
    )
  }
}

export default App;
