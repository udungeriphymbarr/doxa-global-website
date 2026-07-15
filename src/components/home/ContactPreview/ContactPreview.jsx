import { Link } from "react-router-dom";
import church from "../../../data/church";
import "./ContactPreview.css";


function ContactPreview(){


return(

<section className="contact-preview">


<div className="contact-container">


<div className="section-heading">


<p>
Stay Connected
</p>


<h2>
Contact Us
</h2>


</div>



<div className="contact-grid">



<div className="contact-card">

<h3>
Locations
</h3>


<p>
<strong>
Calabar Centre
</strong>
</p>


<p>
{church.locations.calabar.address}
</p>



<p>
<strong>
Lagos Centre
</strong>
</p>


<p>
{church.locations.lagos.address}
</p>


</div>





<div className="contact-card">

<h3>
Phone
</h3>


<p>
{church.contact.phone}
</p>


</div>





<div className="contact-card">

<h3>
Email
</h3>


<p>
{church.contact.email}
</p>


</div>



</div>




<div className="contact-button">


<Link to="/contact">
Contact Us
</Link>


</div>



</div>


</section>

);

}


export default ContactPreview;