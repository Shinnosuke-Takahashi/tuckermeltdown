import { Parallax} from 'react-parallax';
import _ImageOne from './Home.jpg'
import logo from './logo home.png'
import './Home.css'
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';


const Home = () => {
    useEffect(() => {
        const tl = anime.timeline({});

        tl
        .add({
            targets: '.logo',
            opacity: [0,100],
            duration: 30000,
            easing: 'easeInSine',
            direction: 'normal',
        })

        .add({
            targets: '.arrow-down',
            opacity: [0,100],
            duration: 30000,
            easing: 'easeInSine',
            direction: 'normal',
        }, '-=27000')

    }, [])
        

    return(
    <>
    <div className='logodiv'>
        <img className='logo' src={logo} alt='logo'/>
    </div>
    
    <div className="arrow-down">
        <div className="left"/>
        <div className="right"/>
    </div>

    <Parallax 
    className='homebg' 
    bgImage={_ImageOne} 
    bgImageAlt="img1"
    strength={100}
    >    
    </Parallax>
    </>
    )
};

export default Home 