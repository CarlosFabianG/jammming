import React, { Component } from 'react'
import './App.css'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import SearchBar from '../SearchBar/SearchBar'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      searchResults:[{name:'En el muelle de San blas', artist:'Mana', album:'San Blas', id:1},
      {name:'rayando el sol', artist:'Mana', album:'San Blas', id:2}],
      playlistName: 'cool music',
      playlistTracks: [{name: 'no se tu', artist: 'Luis Miguel', id:3}]
    }
    this.addTrack = this.addTrack.bind(this)
  }
  

  addTrack(track){
    console.log(track)
    console.log(this.state.playlistTracks)
    const tracks = this.state.playlistTracks
    if(tracks.find(
      savedTrack => savedTrack.id === track.id))return
      tracks.push(track)
      console.log(tracks)
      this.setState({playlistTracks: tracks})
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
