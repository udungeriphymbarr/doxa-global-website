import "./WhoWeAre.css";
import aboutImage from "../../../assets/images/about/about-church.jpg";


function WhoWeAre(){

return(

<section className="who-we-are">


<div className="who-container">


<div className="who-image">


<img 
src={aboutImage}
alt="Kingdom community"
/>


</div>




<div className="who-content">


<p className="who-label">
Who We Are
</p>


<h2>
A Ministry equipping Believers and Transforming Nations.
</h2>


<p>

KINGDOM COMMUNITY CHURCH is a faith community committed
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