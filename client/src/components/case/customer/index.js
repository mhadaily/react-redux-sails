import React, { PropTypes } from 'react';
import Input from 'react-toolbox/lib/input';

class CustomerCaseComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {name: '', sureName: '', phone: '', email: '', contactWay: '', timeToCall: ''};

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  render() {
    return (
      <section>
        <h3>Customer Info</h3>
        <Input type='text' icon='user' label='Name' name='name' value={this.state.name}
               onChange={this.handleChange.bind(this, 'name')}/>

        <Input type='text' icon='user' label='Name' name='sureName' value={this.state.name}
               onChange={this.handleChange.bind(this, 'sureName')}/>

        <Input type='email' label='Email address' icon='email' value={this.state.email}
               onChange={this.handleChange.bind(this, 'email')}/>

        <Input type='tel' label='Phone' name='phone' icon='phone' value={this.state.phone}
               onChange={this.handleChange.bind(this, 'phone')}/>

        <Input type='text' icon='user' label='contactWay' name='contactWay' value={this.state.name}
               onChange={this.handleChange.bind(this, 'contactWay')}/>

        <Input type='text' icon='user' label='timeToCall' name='timeToCall' value={this.state.name}
               onChange={this.handleChange.bind(this, 'timeToCall')}/>

      </section>
    );
  }

}

// CustomerCaseComponent.propTypes = {
//   saveCustomerDetail: PropTypes.func.isRequired,
// };

export default CustomerCaseComponent;
