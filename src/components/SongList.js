import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../action';

 class SongList extends Component {
    renderList(){
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            onClick={() => this.props.selectSong(song)} 
                            className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        })
    }
    render() {
        // console.log(this.props.songs);
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}


// We use this to map all the song(state, data) in our redux to show as props in SongList component

const mapStateToProps = (state)=> {
    return {
        songs: state.songs
    };
}

// the connect() is a JS function that can be used to call another function
export default connect(
    mapStateToProps, 
    { selectSong }
    )(SongList);