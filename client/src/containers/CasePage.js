import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsCreator from '../actions/caseSavingActions';
import CaseComponent  from '../components/case';

export const CasePage = (props) => {
  return (
    <CaseComponent
      saveCustomerDetail={props.actions.saveCustomerDetail}
      saveDeceasedDetail={props.actions.saveDeceasedDetail}
      saveFuneral={props.actions.saveFuneral}
    />
  );
};

function mapStateToProps(state) {
  return {
    caseCustomer: state.caseCustomer,
    caseDeseaed: state.caseDeseaed,
    caseFuneral: state.caseFuneral
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionsCreator, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CaseComponent);
