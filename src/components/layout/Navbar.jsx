import {Link} from "react-router-dom";
import "./Navbar.css";


function Navbar({menuOpen}){


return(

<nav

className={
menuOpen 
? "navbar active"
: "navbar"
}

>


<ul>


<li>
<Link to="/">
Home
</Link>
</li>


<li>
<Link to="/about">
About
</Link>
</li>


<li>
<Link to="/ministries">
Ministries
</Link>
</li>


<li>
<Link to="/sermons">
Sermons
</Link>
</li>


<li>
<Link to="/events">
Events
</Link>
</li>


<li>
<Link to="/gallery">
Gallery
</Link>
</li>


<li>
<Link to="/contact">
Contact
</Link>
</li>


</ul>


</nav>


);


}


export default Navbar;