import "./PastorSection.css";

import pastorImage from "../../../assets/images/pastor/pastor.jpg";


function PastorSection(){

return(

<section className="pastor-section">


<div className="pastor-container">


<div className="pastor-image">


<img
src={pastorImage}
alt="Dr. Tiku Ettah - Lead Pastor of DOXA GLOBAL"
/>


</div>




<div className="pastor-content">


<p className="pastor-label">
Meet Our Pastor
</p>


<h2>
Dr. Tiku Ettah
<br />
<span>
(Dr. Tee)
</span>
</h2>



<h3>
Medical Doctor.
Apostolic Voice.
Visionary Leader.
</h3>



<p>

Dr. Tiku Ettah is a medical doctor by training,
an apostolic voice by calling, and a visionary
leader with a mandate to raise a generation of
believers who are spiritually alive, practically
equipped, globally relevant, and kingdom-focused.

</p>



<p>

Through Doxa Commission Global, he has been
faithfully training, equipping, and deploying
believers for impact across every sphere of life.

</p>



<p>

He is the convener of The Glory Experience,
The Global Shift, and Back to Bethel — gatherings
marked by worship, prophetic alignment, and
spiritual transformation.

</p>


</div>


</div>


</section>

);

}


export default PastorSection;