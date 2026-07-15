import Button from "../../common/Button";
import "./GiveCTA.css";


function GiveCTA(){

return(

<section className="give-cta">


<div className="give-container">


<p className="give-label">
Partner With Us
</p>


<h2>
Support The Mission
</h2>


<p className="give-description">

Your generosity helps us continue
bringing nations into God's glory world
and supporting the work of ministry.

</p>



<Button
to="/give"
variant="primary"
>

Give Online

</Button>


</div>


</section>

);

}


export default GiveCTA;