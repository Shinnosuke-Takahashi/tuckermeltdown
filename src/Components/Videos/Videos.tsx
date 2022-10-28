import React from "react";
import './Videos.css';

const Videos = () => {
    return (
        <div className='videos'>
            <h3>Videos</h3>
                <div className="video-container">
                    <div className="vid1">
                    <iframe width="1120" height="630" src="https://www.youtube.com/embed/5dtM6E3aP5E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                    </div>
                </div>
        </div>
    )
}

export default Videos

