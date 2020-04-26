import React, { Component } from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'
import Track from '../Track/Track'

class Playlist extends Component {
    render(){
        return(
            <div className="Playlist">
                <input deafultValue={'New Playlist'}/>
                   < TrackList tracks={this.props.playlistTracks.map(
                       track => < Track key={track.id} track={track}/>
                   )}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist