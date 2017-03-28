import React from 'react'
import { render } from 'react-dom'

import Shnayga from '../../src'

export default class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  render(){

    return (
      <div>
        <div>
          <h4>Small (checked = true):</h4>
          <Shnayga
            size="small"
            checked={ true }
          />
        </div>
        <div>
          <h4>Normal (isChecked = { this.state.checked.toString() }):</h4>
          <Shnayga
            checked={ this.state.checked }
            onClick={ () => { this.setState({ checked: !this.state.checked }); } }
          />
        </div>
        <div>
          <h4>Big (disabled = true):</h4>
          <Shnayga
            disabled={ true }
            size="big"
          />
        </div>
        <div>
          <h4>Custom color:</h4>
          <Shnayga onColor="#9cd46b" offColor="#666" />
        </div>
      </div>
    );

  }

}

render(
  <Example />,
  document.getElementById('root')
)
