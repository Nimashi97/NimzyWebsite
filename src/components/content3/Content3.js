import Button from '../core/button/Button';
import './Content3.css';
import Registerfield from './registerfield/Registerfield';
import Socialmedia from './socialmedia/Socialmedia';


function Content3(){
    return(
        <div className="Content3-main">
            
            <span>Signup and get <span className="discount">25%</span> discount on </span><br></br>
            <span> next order </span>
            
            <Registerfield></Registerfield>
            <Socialmedia></Socialmedia>
            
            
                
            
        </div>
    );
}
export default Content3;