import Menu from './Menu';
import './Menubar.css';

function Menubar(){
    return(
        <div className="Menubar-main">
            <Menu  title="home" name="Home"> </Menu>
            <Menu name="Categories"></Menu>
            <Menu name="Features" ></Menu>
            
            
        </div>
    );
}

export default Menubar;