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
      playlistTracks: [{name: 'no se tu', artist: 'Luis Miguel', id:3, uri:46}]
    }
    this.addTrack = this.addTrack.bind(this)
  }

  search = (term) => {
    console.log(term)
  }

  updatePlaylistName = (name) => {
    this.setState({playlistName: name})
  }

  savePlaylist = () => {
    const trackURIs = this.state.playlistTracks.map(track => track.uri && track.uri)
    console.log(trackURIs)
  }
  
  addTrack(track){
    const tracks = this.state.playlistTracks
    if(tracks.find(
      savedTrack => savedTrack.id === track.id))return
      tracks.push(track)
      this.setState({playlistTracks: tracks})
  }

  removeTrack = (track) => {
    let tracks = this.state.playlistTracks
    tracks = tracks.filter( removeTrack => track.id !== removeTrack.id)
    this.setState({playlistTracks: tracks})
  }


  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          < SearchBar onSearch={this.search}/>
          <div className="App-playlist">
              < SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
              < Playlist playlistName={this.state.playlistName} 
                         playlistTracks={this.state.playlistTracks}
                         onRemove={this.removeTrack}
                         onNameChange = {this.updatePlaylistName}
                         onSave = {this.savePlaylist}
              />
          </div>
        </div>
    </div>
    );
  }
 }

export default App
