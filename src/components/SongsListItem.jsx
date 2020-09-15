import React from 'react';

const SongsListItem = props => {
  const handleClick = () => props.handleSongSelected(props.value);
  
  return (
    <li onClick={handleClick}>
      <b>{props.name}</b> | {props.artist}
    </li>
  );
}
 
export default SongsListItem;
