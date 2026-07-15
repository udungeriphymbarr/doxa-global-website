import "./MinistryGrid.css";

import ministries from "../../../data/ministries";


function MinistryGrid(){

return(

<section className="ministry-grid-section">


<div className="ministry-grid-container">


<div className="ministry-grid-heading">


<p>
Our Departments
</p>


<h2>
Explore Our Ministries
</h2>


</div>



<div className="ministry-grid">


{ministries.map((ministry)=>(


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


))}



</div>


</div>


</section>

);

}


export default MinistryGrid;