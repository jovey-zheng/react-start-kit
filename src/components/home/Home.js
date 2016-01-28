import React, {Component} from 'react';

import StartPage from 'components/content/StartPage';
import './home.css';

export default class Home extends Component {

  render() {
    const {router} = this.props;

    return (
      <StartPage />
    );
  }
}
