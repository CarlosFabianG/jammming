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
    playlistTracks: [{name: 'lola', artist: 'mana', album: 'san blas'}]
  }

  addTrack(){
 
  }


  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          < SearchBar />
          <div className="App-playlist">
              < SearchResults onAdd={this.addTrack()} searchResults={this.state.searchResults}/>
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
