import React from 'react';

const SongsListItem = props => {
  return (
    <li>
      <b>{props.name}</b> | {props.artist}
    </li>
  );
}
 
export default SongsListItem;
