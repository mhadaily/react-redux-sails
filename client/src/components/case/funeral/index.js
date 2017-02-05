import React, { PropTypes } from 'react';
import { RadioGroup, RadioButton, Input } from 'react-toolbox';
import * as FuneralTypes from '../../../constants/FuneralTypes';

class FuneralCaseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    type: FuneralTypes.BURIAL
  };

  handleChange = (value) => {
    this.setState({...this.State, type: value});
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.saveFuneral(this.state);
  }

  render() {
    return (
      <section>
        <h3>Funeral Type</h3>
        <form onSubmit={this.handleSubmit} action="post">
          <RadioGroup name='type' value={this.state.type} onChange={this.handleChange}>
            <RadioButton label={FuneralTypes.BURIAL} value={FuneralTypes.BURIAL}/>
            <RadioButton label={FuneralTypes.SEE} value={FuneralTypes.SEE}/>
            <RadioButton label={FuneralTypes.TREE} value={FuneralTypes.TREE}/>
            <RadioButton label={FuneralTypes.CREMATION} value={FuneralTypes.CREMATION}/>
          </RadioGroup>
          <Input type="submit" value="Submit"/>
        </form>
      </section>
    );
  }

}

// FuneralCaseComponent.propTypes = {
//   saveFuneral: PropTypes.func.isRequired,
// };

export default FuneralCaseComponent;
