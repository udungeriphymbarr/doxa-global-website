import { Link } from "react-router-dom";
import "./AboutCTA.css";


function AboutCTA(){

return(

<section className="about-cta">


<div className="about-cta-container">


<h2>
Experience God's Glory
</h2>


<p>

Join DOXA GLOBAL and become part of
a kingdom-focused community committed
to faith, growth, and impact.

</p>



<Link 
to="/ministries"
className="cta-button"
>

Explore Ministries

</Link>



</div>


</section>

);

}


export default AboutCTA;