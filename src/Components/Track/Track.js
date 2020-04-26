import React, { Component } from 'react'


class Track extends Component {

    state = {
        isRemoval:true
    }

    renderAction(){
        if(this.state.isRemoval){
            this.setState({isRemoval: true})
        }
        this.setState({isRemoval: false})
    }

    render(){
        return(
    <div className="Track">
        <div className="Track-information">
            <h3>{this.props.name}</h3>
            <p>{this.props.artist} | {this.props.album}</p>
        </div>
        {this.state.isRemoval ? <button onclick = {renderAction()} className="Track-action">+</button> 
        :<button className="Track-action">-</button>}
    </div>
        )
    }
}

export default Track