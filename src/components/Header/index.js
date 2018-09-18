import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import './Header.css';

const Header = ({ currentPage, history }) => {
  return (
    <div className="heading">
      <span onClick={history.goBack} className="go-back">
        <i className="fas fa-arrow-left" />
      </span>
      <h3>{currentPage}</h3>
    </div>
  );
};

export default withRouter(Header);
