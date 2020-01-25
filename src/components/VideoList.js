import React from 'react';
import VideoItem from './VideoItems';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderList = videos.map(video => {
        return <VideoItem video={video} onVideoSelect={onVideoSelect} />;
    });
    return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
