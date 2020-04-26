import React, { Component } from 'react'
import './Track.css'


class Track extends Component {

    state = {
        isRemoval:true
    }

    addTrack(){
        
    }

    renderAction(){
        //if(!this.state.isRemoval){
        //    this.setState({isRemoval: true})
        //}
        //this.setState({isRemoval: false})
    }

    render(){
        return(
    <div className="Track">
        <div className="Track-information">
            <h3>{this.props.track.name}</h3>
            <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <button onclick={this.renderAction()} className="Track-action">+</button>
    </div>
        )
    }
}

export default Track