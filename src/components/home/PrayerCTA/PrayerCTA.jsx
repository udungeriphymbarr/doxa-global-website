import Button from "../../common/Button";
import "./PrayerCTA.css";


function PrayerCTA(){


return(

<section className="prayer-cta">


<div className="prayer-container">


<h2>
Need Prayer?
</h2>


<p>

We believe in the power of prayer.
Share your prayer request with us and
our team will stand with you in faith.

</p>



<Button
to="/prayer-request"
variant="primary"
>

Submit Prayer Request

</Button>


</div>


</section>

);

}


export default PrayerCTA;