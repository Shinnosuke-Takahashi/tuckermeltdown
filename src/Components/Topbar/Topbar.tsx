import "./Topbar.css"
import logo from './logo top.png'
import {FaYoutube, FaSpotify, FaInstagram, FaFacebook, FaApple} from 'react-icons/fa'
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';

const Topbar = () => {

    useEffect(() => {
        const tl = anime.timeline({});

        tl
        .add({
            targets: '.topbar',
            opacity: [0,100],
            delay: 3000,
            duration: 30000,
            easing: 'easeInSine',
            direction: 'normal',
        })
    }, [])

    return(
        <div className="topbar">
            <img className="icon" alt="TMDlogo" src={logo}>
            </img>
            <div className='links'>
                <li>
                    <a target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/channel/UCG3tvdjFq_Ai3G195yydcBw">
                        <FaYoutube size={25}/>
                    </a>

                    <a target="_blank"
                    rel="noreferrer"
                    href="https://open.spotify.com/artist/5iXlzv83R01pZjUS2wh1Iy?si=0DT4DN_nSLyzPL8CXa0Ayw">
                        <FaSpotify size={25}/>
                    </a>

                    <a target="_blank"
                    rel="noreferrer"
                    href="https://music.apple.com/us/artist/tuckermeltdown/1607914343">
                        <FaApple size={25}/>
                    </a>

                    <a target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/tuckermeltdown/">
                        <FaInstagram size={25}/>
                    </a>

                    <a target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/weareTMD">
                        <FaFacebook size={25}/>
                    </a> 
                </li>      
            </div>
        </div>
    )
}
export default Topbar