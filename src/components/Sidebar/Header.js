import React, { Fragment } from 'react';
import Avatar from '../User/Avatar';
import currentUser from '../../../data/settings.json';

const Header = () => (
  <Fragment>
    <Avatar url={currentUser['avatar']}/>
    <h1>Chats</h1>
  </Fragment>
);

export default Header;
