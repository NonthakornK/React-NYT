import logo from './logo.svg';
import './App.css';
import { Form,FormControl,Button } from 'react-bootstrap';
import React from 'react';

class Result extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>URL</th>
                        <th>Section</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.results && this.props.results.map(result => {
                        return <tr>
                            <td>{result.title}</td>
                            <td>{result.url}</td>
                            <td>{result.section}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        );
    }
}

class App extends React.Component {
  componentDidMount() {
    // get all entities - GET
    const apiUrl = "https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=lrdtBEgyRk7LiRqsDzo1xE5Ys0AoibXJ"
    fetch(apiUrl, {
      method: "GET"
    })
      .then(response => response.json())
      .then((data) => {
        console.log('This is your data', data);
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
            New York Times - Most Popular
          </p>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-md-2" />
            <Button variant="primary">Search</Button>
          </Form>
        </header>
      </div>
    )
  }
}

export default App;
