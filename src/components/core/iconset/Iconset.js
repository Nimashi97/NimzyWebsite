import Menu from '../menubar/Menu';
import './Iconset.css';

function Iconset(){
    return(
        <div className="Icon-main">
            <Menu  title="home" icon="far fa-bell"> </Menu>
            <Menu title="search" icon="fas fa-search"></Menu>
            <Menu title="search" icon="fab fa-opencart"></Menu>

           
            
            
            
        </div>
    );
}
export default Iconset;