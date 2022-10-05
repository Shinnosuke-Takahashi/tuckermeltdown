import { Parallax} from 'react-parallax';
import _ImageOne from '../../Assets/background/1.jpg'
import logo from '../../Assets/logo/font logo.png'
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
    
    <div class="arrow-down">
        <div class="left"/>
        <div class="right"/>
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