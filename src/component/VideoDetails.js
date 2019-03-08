import React from 'react';

const VideoDetails =({video}) =>{
    if(!video){
        return <div className="ui active centered inline loader">loading</div>;
    }

    const vsrc=`https://www.youtube.com/embed/${video.id.videoId}`

    return (
    <div>
        <div className="ui embed">
        <iframe src={vsrc} title="video player"></iframe></div>
        <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        </div>
    </div>
    );
};

export default VideoDetails;