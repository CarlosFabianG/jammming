import React, { Component } from 'react'
import './App.css'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import SearchBar from '../SearchBar/SearchBar'

class App extends Component {
  state = {
    searchResults:[{name:'En el muelle de San blas', artist:'Mana', album:'San Blas'},
    {name:'En el muelle de San blas', artist:'Mana', album:'San Blas'}],
    playlistName: 'cool music',
    playlistTracks: [{name: 'no se tu', artist: 'Luis Miguel', album:'romances'}]
  }

  addTrack(track){
    console.log(track)
    if(this.state.playlistTracks.find(
      savedTrack => savedTrack.id === track.id)) return

      //this.state.playlistTracks.push(track)
  }


  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          < SearchBar />
          <div className="App-playlist">
              < SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
              < Playlist playlistName={this.state.playlistName} 
                         playlistTracks={this.state.playlistTracks}
              />
          </div>
        </div>
    </div>
    );
  }
 }

export default App
