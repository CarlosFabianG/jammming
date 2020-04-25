import React, { Component } from 'react'
import './Playlist.css'
import TrackList from '../Tracklist'

class Playlist extends Component {
    render(){
        return(
            <div className="Playlist">
                <input deafultValue={'New Playlist'}/>
                   < TrackList />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist