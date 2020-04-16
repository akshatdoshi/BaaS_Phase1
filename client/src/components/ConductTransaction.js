import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import history from '../history';

class ConductTransaction extends Component {
  state = { recipient: '' };

  updateRecipient = event => {
    this.setState({ recipient: event.target.value });
  }
  
  conductTransaction = () => {
    const { recipient } = this.state;

    fetch(`${document.location.origin}/api/mine`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: recipient })
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
            placeholder='data'
            value={this.state.recipient}
            onChange={this.updateRecipient}
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
