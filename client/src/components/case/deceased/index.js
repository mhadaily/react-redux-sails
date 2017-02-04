import React, { PropTypes } from 'react';
import Input from 'react-toolbox/lib/input';

class DeceasedCaseComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {name: '', sureName: '', dob: '', line1: '', city: '', postcode: '', country: '', martialStatus: ''};

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  render() {
    return (
      <section>
        <h3>Customer Info</h3>
        <Input type='text' icon='user' label='Name' name='name' value={this.state.name}
               onChange={this.handleChange.bind(this, 'name')}/>

        <Input type='text' icon='user' label='sureName' name='sureName' value={this.state.name}
               onChange={this.handleChange.bind(this, 'sureName')}/>

        <Input type='text' icon='user' label='dob' name='dob' value={this.state.name}
               onChange={this.handleChange.bind(this, 'sureName')}/>

        <Input type='text' icon='user' label='line1' name='line1' value={this.state.name}
               onChange={this.handleChange.bind(this, 'sureName')}/>

        <Input type='text' icon='user' label='city' name='city' value={this.state.name}
               onChange={this.handleChange.bind(this, 'sureName')}/>

        <Input type='text' icon='user' label='postcode' name='postcode' value={this.state.name}
               onChange={this.handleChange.bind(this, 'sureName')}/>

        <Input type='text' icon='user' label='country' name='country' value={this.state.name}
               onChange={this.handleChange.bind(this, 'sureName')}/>

        <Input type='text' icon='user' label='martialStatus' name='martialStatus' value={this.state.name}
               onChange={this.handleChange.bind(this, 'sureName')}/>

      </section>
    );
  }

}

// DeceasedCaseComponent.propTypes = {
//   saveDeceasedDetail: PropTypes.func.isRequired,
// };

export default DeceasedCaseComponent;
