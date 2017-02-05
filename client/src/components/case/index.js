import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

class CaseComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <IndexLink to="/case" label={'customer'}>customer</IndexLink> {' | '}

        <Link to="/case/deceased" label={'deceased'}>deceased</Link> {' | '}

        <Link to="/case/funeral" label={'funeral'}>funeral</Link>
        <hr/>
          {this.props.children}
      </div>
    );
  }

}

export default CaseComponent;
