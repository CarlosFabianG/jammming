import React, { Component } from 'react'
import './Playlist.css'
import Tracklist from '../Tracklist'

class Playlist extends Component {
    render(){
        return(
            <div className="Playlist">
                <input deafultValue={'New Playlist'}/>
                   < Tracklist />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist