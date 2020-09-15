import React from 'react';

const SongDetails = props => {
  console.log('props :>> ', props);
  return ( 
    <>
      <h2>{props.song["im:name"].label}</h2>
      <h3>{props.song["im:artist"].label}</h3>
      
    </>
  );
    
}
 
export default SongDetails;
