import React, { Component } from 'react'
import './SearchBar.css'


class SearchBar extends Component {
    state = {
        term: null
    }

    handleTermChange = (e) => {
        const changeTerm = e.target.value
        console.log(changeTerm)
        this.setState({term: changeTerm})
    }

    search = () => {
        this.props.onSearch(this.state.term)
    }

    render(){
        return(
         <div className="SearchBar">
            <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton">SEARCH</button>
        </div>
        )
    }
}

export default SearchBar