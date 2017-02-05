import React from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import dateHelper from '../../helpers/dataFormat';

class CustomerCards extends React.Component {

  constructor(props) {
    super(props);
  }

  handleDataFormat(date) {
    console.log(date);
    return dateHelper.getFormattedDateTime(new Date(date));
  }

  render() {
    return (
      <Card>
        <CardTitle
          avatar="https://placeimg.com/80/80/animals"
          title={this.props.caseSingle.customer.name + ' ' + this.props.caseSingle.customer.sureName}
          subtitle={this.props.caseSingle.customer.martialStatus}
        />
        <CardTitle
          title={'Email:' + this.props.caseSingle.customer.email + ' Phone:' + this.props.caseSingle.customer.phone}
          subtitle={this.props.caseSingle.customer.contactWay}
        />
        <CardText>Time to Call: {this.handleDataFormat(this.props.caseSingle.customer.timeToCall)}</CardText>
        <CardActions>
          <Button label="Edit" onMouseUp={this.props.actions.SAVE_FUNERAL}/>
        </CardActions>
      </Card>
    )
  }
}

export default CustomerCards;
