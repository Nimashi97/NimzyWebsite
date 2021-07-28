import './Button.css';

function Button(props){
    return(
        <div  className="Button-main btn" title={props.name} >
            {props.name} 
            <i class={props.icon}></i>
        </div>
    );
}
export default Button;