import React from 'react';
import { Link } from 'react-router';
import { List, ListItem, ListSubHeader } from 'react-toolbox';
import fakeData from '../../data/case';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List selectable ripple>
        <ListSubHeader caption='Explore All Cases'/>
        {fakeData.map(row => (
          <Link to={'/case/' + row._id} key={row._id}>
            <ListItem
              avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
              caption={row.deceased.name + ' ' + row.deceased.sureName}
              legend={row.deceased.dob + ' ' + row.deceased.martialStatus}
              rightIcon='star'
              leftIcon='send'
            />
          </Link>
        ))}
      </List>
    );
  }

}

export default HomePage;
