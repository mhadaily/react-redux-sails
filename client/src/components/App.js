import React, { PropTypes } from 'react';
import { Layout, Panel } from 'react-toolbox';
import MainHeader from './header/Header';

const App = (props) => {
  return (
    <Layout>
      <Panel>
        <MainHeader/>
        <div style={{flex: 1, overflowY: 'auto', padding: '1.8rem'}}>
          {props.children}
        </div>
      </Panel>
    </Layout>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
