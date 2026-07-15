import Button from "../../common/Button";
import "./SermonsPreview.css";


function SermonsPreview(){


return(

<section className="sermons-preview">


<div className="sermons-container">


<div className="section-heading">


<p>
Grow In Faith
</p>


<h2>
Sermons
</h2>


</div>



<div className="sermons-empty">


<div className="sermon-icon">

🎥

</div>


<h3>
Sermons Coming Soon
</h3>


<p>

Our sermon library will be available soon.
Stay connected and grow with us through
God's Word.

</p>


</div>



<div className="sermons-button">

<Button
to="/sermons"
variant="primary"
>

View All Sermons

</Button>


</div>


</div>


</section>

);


}


export default SermonsPreview;