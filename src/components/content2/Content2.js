import Button from '../core/button/Button';
import './Content2.css';
import girlwithhat from './girlwithhat.png';

function Content2(){
    return(
        <div className="Content2-main">
            <div class="row">
                <div class="col-md-6">
                <h6>HAT-HANDBAG-SHOES-EYEWARE</h6>
                <h1>Accessories for her</h1>
                
                <p><q><strong>Fashion is artistically designed to express the boldness of beauty</strong></q></p>
                <Button name="Shop Now"></Button>
                
                </div>
                <div class="col-md-6">
                    <img src={girlwithhat} class="girlwithhat"></img>
                </div>
            </div> 
            
        </div>
    );
}
export default Content2;