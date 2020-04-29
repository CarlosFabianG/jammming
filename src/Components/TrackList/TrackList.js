import React, { Component } from 'react'
import './TrackList.css'
import Track from '../Track/Track'

class TrackList extends Component {
    render(){
        return(
            <>
            <div className="TrackList">

                {this.props.tracks.map(
                    track => < Track 
                                key={track.id} 
                                track={track} 
                                onAdd={this.props.onAdd}
                                isRemoval={false}
                            />
                )} 
            </div>
            </>
        )
    }
}

export default TrackList