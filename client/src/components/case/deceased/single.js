import React from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';

class DeceasedCards extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardTitle
          avatar="https://placeimg.com/80/80/animals"
          title={this.props.caseSingle.deceased.name + ' ' + this.props.caseSingle.deceased.surname}
          subtitle={this.props.caseSingle.deceased.martialStatus}
        />
        <CardTitle
          title={this.props.caseSingle.deceased.dob}
        />
        <CardText>{this.props.caseSingle.deceased.address.line1}<br/>
          {this.props.caseSingle.deceased.address.city}
          {this.props.caseSingle.deceased.address.country}
          {this.props.caseSingle.deceased.address.postcode}
        </CardText>
        <CardActions>
          <Button label="Edit" onMouseUp={this.props.actions.SAVE_FUNERAL}/>
        </CardActions>
      </Card>

    )
  }
}

export default DeceasedCards;
