import React from 'react';
import { Link } from 'react-router';
import { List, ListItem, ListSubHeader, Input } from 'react-toolbox';
import fakeData from '../../data/case';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  filtered = fakeData;

  handleChange(value) {
    let filter = fakeData.filter(obj => {
      return obj.deceased.sureName.includes(value) || obj.deceased.name.includes(value)
    });
    this.setState({filter});
  };

  render() {
    let listFilter;
    if (typeof this.state.filter === "undefined") {
      listFilter = this.filtered
    } else {
      listFilter = this.state.filter
    }
    return (
      <List selectable ripple>
        <div>
          <Input type='text' icon='user' label='Please Type Deceased Name or Surname' name='surname'
                 onChange={this.handleChange.bind(this)}/>
        </div>
        <ListSubHeader caption='Explore All Cases'/>
        {listFilter.map(row => (
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

export default SearchPage;
