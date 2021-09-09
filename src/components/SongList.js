import React, { Component } from 'react';
import { connect } from 'react-redux';


 class SongList extends Component {
    render() {
        return (
            <div>
                Songlist
            </div>
        )
    }
}


// We use this to map all the song(state, data) in our redux to show as props in SongList component

const mapStateToProps = (state)=> {
    console.log(state);
    return state;
}

// the connect() is a JS function that can be used to call another function
export default connect(mapStateToProps)(SongList)