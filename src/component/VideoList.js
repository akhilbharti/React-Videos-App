import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((video) => {
         return <VideoItem video={video} onVideoSlect={onVideoSelect} key={video.id.videoId }/>;
    });
    
    //props.vide
    return <div className="ui relaxed divided list">{renderedList }</div>;
};


export default VideoList;