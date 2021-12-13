import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) => {
    //the .map() loops through the videos array pullings each VideoItem components
    const renderedList = videos.map(video => {
        return <VideoItem key ={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    });


    //returns the RenderedList above.
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList
