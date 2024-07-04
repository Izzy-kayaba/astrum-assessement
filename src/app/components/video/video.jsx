import React, { } from 'react';
import './VideoComponent.css';

const VideoComponent = () => {

    return (
        <div className="video-section">
            <video width={1400} autoPlay muted>
                <source src="/assets/videos/women-in-wilderness.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoComponent;
