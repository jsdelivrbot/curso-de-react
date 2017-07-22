import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div>
                <img src={imageUrl} alt="" />
            </div>
            <div>
                <h3>{video.snippet.channelTitle}</h3>
            </div>
        </li>
    );
}

export default VideoListItem;