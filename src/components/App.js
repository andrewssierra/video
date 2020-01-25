import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends Component {
    state = { videos: [] };

    onTermSubmit = async term => {
        let response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items });
    };

    render() {
        const videosLength = this.state.videos.length;
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
                {videosLength > 0 ? `${videosLength} found` : null}
            </div>
        );
    }
}

export default App;
