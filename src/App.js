import { Form, FormControl } from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import './App.css';
import ResultCard from './ResultCard';

function App() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = allData.filter((data) => {
      return data.title.toLowerCase().search(value) != -1;
    });
    setFilteredData(result);
  }
  useEffect(() => {
    fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=lrdtBEgyRk7LiRqsDzo1xE5Ys0AoibXJ")
      .then(resp => resp.json())
      .then((data) => {
        console.log(data.results);
        setAllData(data.results);
        setFilteredData(data.results);
      })
    }, [])

  return( 
    <div className="App">
      <header className="App-header">
        <p>
          New York Times - Most Popular in 30 Days
        </p>
        <Form inline>
          <FormControl type="text" placeholder="Search by Title" className="mr-md-2" htmlSize="40" onChange={(event) => handleSearch(event)}/>
        </Form>
      </header>
      <ResultCard articles={filteredData} />
      
    </div>
  )
}

export default App;
