import React, { Component } from 'react'
import './Track.css'


class Track extends Component {

    constructor(props) {
        super(props)
        this.state = { isRemoval:null }
        
        this.addTrack = this.addTrack.bind(this)
    }

    addTrack(){
        this.props.onAdd(this.props.track)
    }

    removeTrack = () =>{
        this.props.onRemove(this.props.track)
    }

    renderAction(){
        if(!this.state.isRemoval){
            this.setState({isRemoval: true})
        } 
    }

    render(){
        return(
    <div className="Track">
        <div className="Track-information">
            <h3>{this.props.track.name}</h3>
            <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.state.isRemoval ? <button onClick={this.addTrack} className="Track-action">+</button>
                              :  <button onClick={this.removeTrack} className="Track-action">-</button>}
    </div>
        )
    }
}

export default Track