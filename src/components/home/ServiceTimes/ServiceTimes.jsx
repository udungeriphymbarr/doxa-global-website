import church from "../../../data/church";
import "./ServiceTimes.css";


function ServiceTimes(){


return(

<section className="service-times">


<div className="service-container">


<div className="section-heading">

<p>
Worship With Us
</p>

<h2>
Service Times
</h2>

</div>



<div className="service-cards">



{/* Calabar */}

<div className="service-card">


<h3>
Calabar Centre
</h3>


<p className="address">

{church.locations.calabar.address}

</p>


<h4>
Services
</h4>


<ul>

{
church.locations.calabar.services.map((service)=>(
<li key={service}>
{service}
</li>
))
}

</ul>


</div>





{/* Lagos */}

<div className="service-card">


<h3>
Lagos Centre
</h3>


<p className="address">

{church.locations.lagos.address}

</p>


<h4>
Services
</h4>


<ul>

{
church.locations.lagos.services.map((service)=>(
<li key={service}>
{service}
</li>
))
}

</ul>


</div>



</div>


</div>


</section>

);


}


export default ServiceTimes;