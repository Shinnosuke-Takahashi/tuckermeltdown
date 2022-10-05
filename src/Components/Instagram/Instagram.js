import { Parallax } from 'react-parallax';
import _ImageThree from '../../Assets/background/3.jpg'
import './Instagram.css'

const Instagram = () => (
    <Parallax className='InstagramBg' bgImage={_ImageThree} strength={100}>
        <h3>Instagram</h3> 
        <div className="igGrid">
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
        <iframe src="https://cdn.lightwidget.com/widgets/c80817fbe73c532facdb01467d68e01e.html" 
        scrolling="no" allowtransparency="true" 
        class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>
        </div>
    </Parallax>
);

export default Instagram

