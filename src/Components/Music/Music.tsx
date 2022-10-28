import React from "react";
import './Music.css';

const Music = () => {
    return (
        <div className='music'>
            <h3>Music</h3>
                <div className="musicbox">
                    <div className="song1">
                    <iframe className="kms" 
                        src="https://embed.music.apple.com/us/album/kissing-me-slowly/1614577791?i=1614577792" 
                        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                        frameBorder="0" height="175"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"/>
                    </div>
                    
                    <div className="song2">
                        <iframe className="playdead" 
                        src="https://embed.music.apple.com/us/album/play-dead/1608067929?i=1608067933" 
                        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                        frameBorder="0" height="175"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"/>
                    </div>
                </div>
        </div>
    )
}

export default Music