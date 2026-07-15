import { Link } from "react-router-dom";
import "./MinistryCTA.css";


function MinistryCTA(){

return(

<section className="ministry-cta">


<div className="ministry-cta-container">


<h2>
Find Your Place
</h2>


<p>

There is a place for you in the
DOXA GLOBAL family. Connect with us
and discover opportunities to serve,
grow, and make an impact.

</p>



<Link 
to="/contact"
className="ministry-cta-button"
>

Contact Us

</Link>



</div>


</section>

);

}


export default MinistryCTA;