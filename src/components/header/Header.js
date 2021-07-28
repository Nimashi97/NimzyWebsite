import Iconset from '../core/iconset/Iconset';
import Logo from '../core/logo/Logo';
import Menubar from '../core/menubar/Menubar';
import './Header.css';

function Header(){
    return(
    <div >
        <div class="row" className="Header-main">
        <div class="col-md-4"><Logo></Logo></div>
        <div class="col-md-4"><Menubar></Menubar></div>
        <div class="col-md-4"><Iconset></Iconset></div>
        </div>
    </div>);
}
export default Header;