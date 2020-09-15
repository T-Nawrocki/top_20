import React from 'react';
import SongsListItem from './SongsListItem';

const SongsList = props => {

  const songNodes = props.songs.map(song => {
    return (<SongsListItem 
        key={song.id.attributes["im:id"]}
        value={song.id.attributes["im:id"]}
        name={song["im:name"].label}
        artist={song["im:artist"].label} />
    )
  });

  return (
    <ol id="songs-list">
      {songNodes}
    </ol>
  );

}
 
export default SongsList;
