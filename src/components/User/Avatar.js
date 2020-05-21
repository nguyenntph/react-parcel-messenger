import React, { Fragment } from 'react';

const Avatar = ({ url }) => (
  <img src={url} width="50" height="50" style={{ borderRadius: '100%' }}/>
)

export default Avatar;
