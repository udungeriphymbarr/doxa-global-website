import ministries from "../../../data/ministries";
import Button from "../../common/Button";
import "./MinistriesPreview.css";


function MinistriesPreview(){


return(

<section className="ministries-preview">


<div className="ministries-container">


<div className="section-heading">

<p>
Serve & Belong
</p>

<h2>
Our Ministries
</h2>


</div>



<div className="ministries-grid">


{
ministries.map((ministry)=>(
<div 
className="ministry-card"
key={ministry.name}
>


<h3>
{ministry.name}
</h3>


<p>
{ministry.description}
</p>


</div>
))
}


</div>



<div className="ministries-button">

<Button
to="/ministries"
variant="primary"
>

View All Ministries

</Button>


</div>


</div>


</section>

);

}


export default MinistriesPreview;