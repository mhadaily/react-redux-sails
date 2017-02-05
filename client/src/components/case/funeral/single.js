import React from 'react';
import { Card, CardTitle } from 'react-toolbox/lib/card';

class FuneralCards extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={{width: '350px'}}>
        <CardTitle
          avatar="https://placeimg.com/80/80/animals"
          title={this.props.caseSingle.funeral.type}
        />
      </Card>
    )
  }
}

export default FuneralCards;
