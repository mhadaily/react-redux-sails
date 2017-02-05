import React, { PropTypes, Component } from 'react';
import { Layout, Panel , Sidebar} from 'react-toolbox';

import MainHeader from './header/Header';
import Menu from './sidebar/menu';
import style from '../styles/_custom.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Panel>
          <MainHeader/>
          <Layout>
            <Sidebar pinned={true}>
              <Menu/>
            </Sidebar>
            <Panel className={style.padding__30}>
              {this.props.children}
            </Panel>
          </Layout>
        </Panel>
      </Layout>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
