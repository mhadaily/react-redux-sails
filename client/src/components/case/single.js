import React, { PropTypes } from 'react';
import { Tab, Tabs } from 'react-toolbox';
import DeceasedCards from './deceased/single';
import CustomerCards from './customer/single';
import FuneralCards from './funeral/single';
import fakeData from '../../data/case';

class SingleCaseComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    fixedIndex: 1,
    caseSingle: fakeData.filter(obj => obj._id === this.props.params.id)[0]
  };

  handleFixedTabChange = (index) => {
    this.setState({fixedIndex: index});
  };

  render() {
    return (
      <div>
        <h3>Case ID: {this.props.params.id}</h3>
        <Tabs index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
          <Tab label='Deceased Info'>
            <DeceasedCards {...this.props} caseSingle={this.state.caseSingle}/>
          </Tab>
          <Tab label='Customer Info'>
            <CustomerCards {...this.props} caseSingle={this.state.caseSingle}/>
          </Tab>
          <Tab label='Funeral Info'>
            <FuneralCards {...this.props} caseSingle={this.state.caseSingle}/>
          </Tab>
        </Tabs>
      </div>
    );
  }

}


export default SingleCaseComponent;
