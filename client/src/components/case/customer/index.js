import React, { PropTypes } from 'react';
import Input from 'react-toolbox/lib/input';

class CustomerCaseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, value) => {
    this.setState({...this.State, [name]: value});
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.saveCustomerDetail(this.state);
  }

  render() {
    return (
      <section>
        <h3>Customer Info</h3>
        <form onSubmit={this.handleSubmit} action="post">
          <Input type='text' icon='user' label='Name' name='name'
                 onChange={this.handleChange.bind(this, 'name')}/>

          <Input type='text' icon='user' label='Name' name='sureName'
                 onChange={this.handleChange.bind(this, 'sureName')}/>

          <Input type='email' label='Email address' icon='email'
                 onChange={this.handleChange.bind(this, 'email')}/>

          <Input type='tel' label='Phone' name='phone' icon='phone'
                 onChange={this.handleChange.bind(this, 'phone')}/>

          <Input type='text' icon='user' label='contactWay' name='contactWay'
                 onChange={this.handleChange.bind(this, 'contactWay')}/>

          <Input type='text' icon='user' label='timeToCall' name='timeToCall'
                 onChange={this.handleChange.bind(this, 'timeToCall')}/>

          <Input type="submit" value="Submit"/>
        </form>
      </section>
    );
  }

}

// CustomerCaseComponent.propTypes = {
//   saveCustomerDetail: PropTypes.func.isRequired,
// };

export default CustomerCaseComponent;
