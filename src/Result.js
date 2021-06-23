import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';
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

export default Result;