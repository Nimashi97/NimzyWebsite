import './Menu.css';

function Menu(props){
    return(
        <div className="Menu-main btn" title={props.name} >
            <a href="#" className="menuclick">{props.name} 
            <i class={props.icon}></i>
            </a>
        </div>
    );
}

export default Menu;