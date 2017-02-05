import React, { PropTypes } from 'react';
import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';

class FuneralCaseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, value) => {
    this.setState({...this.State, [name]: value});
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.saveFuneral(this.state);
  }

  render() {
    return (
      <section>
        <h3>Funeral Type</h3>
        <RadioGroup name='type' onChange={this.handleChange.bind(this, 'type')}>
          <RadioButton label='The Walking Dead' value='thewalkingdead'/>
          <RadioButton label='From Hell' value='fromhell'/>
          <RadioButton label='V for a Vendetta' value='vvendetta'/>
          <RadioButton label='Watchmen' value='watchmen'/>
        </RadioGroup>
      </section>
    );
  }

}

// FuneralCaseComponent.propTypes = {
//   saveFuneral: PropTypes.func.isRequired,
// };

export default FuneralCaseComponent;
