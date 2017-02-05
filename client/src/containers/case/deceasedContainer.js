import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsCreator from '../../actions/caseSavingActions';
import DeceasedCaseComponent  from '../../components/case/deceased';

function mapStateToProps(state) {
  return {
    caseInfo: state.caseInfo,
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
)(DeceasedCaseComponent);

