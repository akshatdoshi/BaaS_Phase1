import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import history from '../history';

class ConductTransaction extends Component {
  state = { name: '', email: '', covid: ''};

  conductTransaction = () => {
    const { name, email, covid } = this.state;

    fetch(`${document.location.origin}/api/mine`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: name })
    }).then(response => response.json())
      .then(json => {
        history.push('/blocks');
      });
  }
  

  render() {
    return (
      <div className='ConductTransaction'>
        <Link to='/'>Home</Link>
        <h3>Conduct a Transaction</h3>
        <br />
        <h4>Enter Textual Data</h4>
        
        <br />
        <FormGroup>
          <FormControl
            input='text'
            placeholder='name'
            value={this.state.name}
          />
          <FormControl
            input='text'
            placeholder='email'
            value={this.state.email}
          />
          <FormControl
            input='text'
            placeholder='covid19'
            value={this.state.covid}
          />
        </FormGroup>
        <div>
          <Button
            bsStyle="danger"
            onClick={this.conductTransaction}
          >
            Submit
          </Button>
        </div>
      </div>
    )
  }
};

export default ConductTransaction;
