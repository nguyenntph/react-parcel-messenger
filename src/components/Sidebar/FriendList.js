import React, { Fragment } from 'react';
import data from '../../../data/friends.json';
import Avatar from '../User/Avatar';

const FriendList = ({ switchConversation }) => (
  <Fragment>
    { data["friends"].map((friend) => (
      <div onClick={() => switchConversation(friend)} key={friend.id}>
        <Avatar url={friend.avatar}></Avatar>
        <p>{friend.username}</p>
      </div>
    )) }
  </Fragment>
)

export default FriendList;
