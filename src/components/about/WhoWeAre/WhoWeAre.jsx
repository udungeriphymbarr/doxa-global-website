import "./WhoWeAre.css";
import aboutImage from "../../../assets/images/about/about-church.jpg";


function WhoWeAre(){

return(

<section className="who-we-are">


<div className="who-container">


<div className="who-image">


<img 
src={aboutImage}
alt="DOXA GLOBAL Church community"
/>


</div>




<div className="who-content">


<p className="who-label">
Who We Are
</p>


<h2>
A Ministry Bringing Nations Into God's Glory World
</h2>


<p>

DOXA GLOBAL is a faith community committed
to advancing God's Kingdom, raising believers,
and creating an environment where people can
encounter God's glory.

</p>


<p>

Through worship, teaching, fellowship, and
service, we desire to impact lives and bring
people closer to God's purpose.

</p>



</div>



</div>


</section>

);

}


export default WhoWeAre;