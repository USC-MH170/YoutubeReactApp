import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube'
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

/*
App component which collates all sub-components (Similar to MainMethod in Java)
*/


class App extends React.Component {
    state = { videos: [], selectedVideo: null }

// componentDidMount() {
//     this.onTermSubmit('Trending')
// }


    /*
    Receives the search term from the SearchBar JSX tag and makes an API query
    */
    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video});
        console.log(video)
    }


/*
    Both onVideoSelect and Videos is passed down through the VideoList to the VideoItem. A Callback function will then send the video  to the app's selectedVideo state via onVideoSelect.
*/

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
                </div>
                <div className="five wide column">
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default App;
