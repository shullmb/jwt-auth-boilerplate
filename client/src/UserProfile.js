import React from 'react';

export const UserProfile = props => {
  return (
    <div>
      <p>hello, {props.user.name}! </p>
      <a onClick={props.logout}>Log out</a>
    </div>
  )
}