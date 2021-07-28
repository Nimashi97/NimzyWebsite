import Menu from '../core/menubar/Menu';
import './Footer.css';
import Footermenubar from './footermenubar/Footermenubar';

function Footer(){
    return(
        <div className="Footer-main">
            <div class="row">
                <div class="col-md-6" >
                    <p className="copyright">Copyright @ 2021 NimashiJayawickrama. All Rights Received</p>
                </div>
                <div class="col-md-6">
                <Footermenubar></Footermenubar> 
                
                </div>
               
            </div>
        </div>
    )
;}

export default Footer;