import { useState } from "react";
import Navbar from "./Navbar";
import Button from "../common/Button";
import church from "../../data/church";
import logo from "../../assets/images/logo/doxa-logo.png";
import "./Header.css";


function Header(){

const [menuOpen, setMenuOpen] = useState(false);


return(

<header className="header">


<div className="header-container">


<div className="logo">

<img
  src={logo}
  alt={`${church.name} official logo`}
  className="header-logo"
/>

</div>



<button

className="menu-toggle"

onClick={() => setMenuOpen(!menuOpen)}

aria-label="Toggle navigation menu"

>

<span></span>
<span></span>
<span></span>


</button>




<Navbar menuOpen={menuOpen}/>




<div className="header-give">

<Button
to="/give"
variant="primary"
>

Give

</Button>

</div>



</div>


</header>

);

}


export default Header;