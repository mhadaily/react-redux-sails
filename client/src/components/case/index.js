import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import {Button} from 'react-toolbox';

class CaseComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <IndexLink activeClassName="active" to="/case" label={'customer'}><Button accent={true} label="Customer Details"/></IndexLink>
        <Link activeClassName="active" to="/case/deceased" label={'deceased'}><Button accent={true} label="Deceased Information"/></Link>
        <Link activeClassName="active" to="/case/funeral" label={'funeral'}><Button accent={true} label="Funeral Type"/></Link>
        <hr/>
          {this.props.children}
      </div>
    );
  }

}

export default CaseComponent;
