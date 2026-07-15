import { Link } from "react-router-dom";
import "./Button.css";


function Button({
children,
to,
variant="primary"
}){


if(to){

return(

<Link
to={to}
className={`btn ${variant}`}
>

{children}

</Link>

);

}


return(

<button
className={`btn ${variant}`}
>

{children}

</button>

);


}


export default Button;