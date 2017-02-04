import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it } from 'mocha';

import { CasePage } from './CasePage';
import CaseComponent from '../components/case';

describe('<CasePage />', () => {
  it(`should contain <CaseComponent />`, () => {
    const actions = {
      saveCustomerDetail: () => { },
      saveDeceasedDetail: () => { },
      saveFuneral: () => { },
    };
    const caseSavings = {};
    const wrapper = shallow(<CasePage actions={actions} caseSavings={caseSavings}/>);

    expect(wrapper.find(CaseComponent)).to.be.length(1);
  });
});
