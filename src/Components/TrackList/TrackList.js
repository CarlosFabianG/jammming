import React, { Component } from 'react'
import './TrackList.css'
import SearchResults from '../SearchResults'
import Track from '../Track'

class TrackList extends Component {
    render(){
        return(
            <>
            <div className="TrackList">
                <SearchResults 
                tracks={this.props.searchResults.map(
                    track => < Track 
                                key={track.id} 
                                name={track.name} 
                                artist={track.artist}
                                album={track.album}
                            />
                )} 
                />
            </div>
            </>
        )
    }
}

export default TrackList