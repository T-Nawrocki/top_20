import React, { Component } from 'react';
import SongDetails from '../components/SongDetails';
import SongsList from '../components/SongsList';

class SongsContainer extends Component {

  state = { 
    songs: [],
    selectedSongId: null
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
      .then(res => res.json())
      .then(data => this.setState({ songs: data.feed.entry }))
  }  

  render() { 
    return (
      <>
        <SongsList songs={this.state.songs} />
        <SongDetails />
      </>
    );
  }
  
}
 
export default SongsContainer;
