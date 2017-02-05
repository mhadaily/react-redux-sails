import React, { PropTypes } from 'react';
import Input from 'react-toolbox/lib/input';

class DeceasedCaseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, value) => {
    this.setState({...this.State, [name]: value});
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.saveDeceasedDetail(this.state);
  }

  render() {
    return (
      <section>
        <h3>Customer Info</h3>
        <form onSubmit={this.handleSubmit} action="post">
          <Input type='text' icon='user' label='Name' name='name'
                 onChange={this.handleChange.bind(this, 'name')}/>

          <Input type='text' icon='user' label='sureName' name='sureName'
                 onChange={this.handleChange.bind(this, 'sureName')}/>

          <Input type='text' icon='user' label='dob' name='dob'
                 onChange={this.handleChange.bind(this, 'dob')}/>

          <Input type='text' icon='user' label='line1' name='line1'
                 onChange={this.handleChange.bind(this, 'line1')}/>

          <Input type='text' icon='user' label='city' name='city'
                 onChange={this.handleChange.bind(this, 'city')}/>

          <Input type='text' icon='user' label='postcode' name='postcode'
                 onChange={this.handleChange.bind(this, 'postcode')}/>

          <Input type='text' icon='user' label='country' name='country'
                 onChange={this.handleChange.bind(this, 'country')}/>

          <Input type='text' icon='user' label='martialStatus' name='martialStatus'
                 onChange={this.handleChange.bind(this, 'martialStatus')}/>

          <Input type="submit" value="Submit"/>
        </form>
      </section>
    );
  }

}

// DeceasedCaseComponent.propTypes = {
//   saveDeceasedDetail: PropTypes.func.isRequired,
// };

export default DeceasedCaseComponent;
