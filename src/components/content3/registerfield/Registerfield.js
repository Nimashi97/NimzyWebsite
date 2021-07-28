import Button from '../../core/button/Button';
import './Registerfield.css';


function Registerfield(){
    return(
        <div className="registerfield">
            <input type="text" placeholder="Your email ..."></input>
            <input type="submit" value="REGISTER" className="register"></input>
        </div>
    );

}
export default Registerfield;