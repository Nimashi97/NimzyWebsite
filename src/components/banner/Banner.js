import Button from '../core/button/Button';
import Logo from '../core/logo/Logo';
import './Banner.css';
import g from './g.png';

function Banner(){
    return(
        <div className="Banner-main">
            <div className="content">
            <h1>New Fashion</h1>
            <Logo></Logo>
            <span>New Collection</span>
            <p>-----You can have anything you want in life if you dress for it.-----</p>
            <Button name="Discover Now"></Button>
            </div>
                
            
        </div>
    );
}
export default Banner;