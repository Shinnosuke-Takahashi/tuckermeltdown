import "./Botbar.css"
import logo from './logo bot.png'
import {FaYoutube, FaSpotify, FaInstagram, FaFacebook, FaApple} from 'react-icons/fa'

const botbar = () => {
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
    
    return (
        <div className="botbar">
            <img className="icon" alt="TMDlogo" src={logo} onClick={scrollToTop}>
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
};

export default botbar