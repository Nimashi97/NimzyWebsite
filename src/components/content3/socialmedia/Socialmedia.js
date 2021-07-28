
import Menu from '../../core/menubar/Menu';
import './Socialmedia.css';

function Socialmedia(){
    return(
        <div className="Socialmedia-main">
            <Menu  title="home" icon="fab fa-facebook"> </Menu>
            <Menu title="search" icon="fab fa-instagram"></Menu>
            <Menu title="search" icon="fab fa-pinterest"></Menu>
            <Menu title="search" icon="fab fa-youtube"></Menu>
            

           
            
            
        </div>
    );
}
export default Socialmedia;