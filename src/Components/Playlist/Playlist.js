import React, { Component } from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'

class Playlist extends Component {



    handleNameChange = (e) => {
        this.props.onNameChange(e.target.value)
    }
    render(){
        return(
            <div className="Playlist">
                <input onChange={this.handleNameChange} 
                       defaultValue={'New Playlist'}
                />
                   < TrackList tracks={this.props.playlistTracks} 
                               onRemove={this.props.onRemove}
                               isRemoval={false}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist