import './VideoItem.css'
import React from 'react';

const VideoItem = ({video,onVideoSlect}) => {
    return (
    <div  onClick={()=>onVideoSlect(video)}className="video-item item">
        <img src={video.snippet.thumbnails.medium.url} className="ui image" alt={video.snippet.title} />
        <div className="content">
        <div className="header">{video.snippet.title} 
        </div>
        </div>
          
    </div>);
}


export default VideoItem;