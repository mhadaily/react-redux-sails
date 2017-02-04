import React, { PropTypes } from 'react';
import Input from 'react-toolbox/lib/input';

class FuneralCaseComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {type: ''};

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  render() {
    return (
      <section>
        <h3>Funeral Type</h3>
        <Input type='text' icon='user' label='Type' name='type' value={this.state.type}
               onChange={this.handleChange.bind(this, 'type')}/>
      </section>
    );
  }

}

// FuneralCaseComponent.propTypes = {
//   saveFuneral: PropTypes.func.isRequired,
// };

export default FuneralCaseComponent;
