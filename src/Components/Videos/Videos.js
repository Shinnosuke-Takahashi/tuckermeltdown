import React from "react";
import './Videos.css';

const Videos = () => {
    return (
        <div className='videos'>
            <h3>Videos</h3>
                <div className="video-container">
                    <div className="vid1">
                    <iframe width="1120" height="630" src="https://www.youtube.com/embed/w-D0gcFvEBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                    </div>
                </div>
        </div>
    )
}

export default Videos