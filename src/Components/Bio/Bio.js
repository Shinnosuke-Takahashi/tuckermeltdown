import { Parallax } from 'react-parallax';
import _ImageTwo from '../../Assets/background/2.jpg'
import './Bio.css'

const Bio = () => (
    <Parallax className='parallaxBg' bgImage={_ImageTwo} strength={100}>
        <h3>Bio</h3>
        <div className='content'>
            <span className='bio'>WE ARE TUCKERMELTDOWN...
                <p>
                    the big booty band from new york city.
                </p>
                <p>
                we are a serious group looking to write very underwhelming biographies.
                </p>
                <p>
                we really hope we live up to your expectations. are you bored yet? we hope so.
                </p>
            </span>
        </div>

    </Parallax>
);

export default Bio