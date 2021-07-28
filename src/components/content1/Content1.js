import './Content1.css';
import R from './R.jpg';
import h from './h.jpg';
import necklace from './necklace.jpg';
import necklace2 from './necklace2.jpg';
import earing from './earing.jpg';
import girl from './girl.jpg';
import Button from '../core/button/Button';

function Content1(){
    return(

        <div className="Content1-main">
        
            <div class="image-grid-container">
                        <img className="im1" src={R}/>
                    <div class="image-grid-container">
                    <img src={necklace}/>
                    <img src={girl}/>    
                            
                            <div class="image-grid-container">
                            <img src={h}/>
                            </div>
                            <div class="image-grid-container">
                                <img src={earing}/>
                            </div>
                    </div>
            </div>
        </div>
      
    );
}

export default Content1;