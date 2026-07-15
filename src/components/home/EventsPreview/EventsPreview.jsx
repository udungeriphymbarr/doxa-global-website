import events from "../../../data/events";
import Button from "../../common/Button";
import "./EventsPreview.css";


function EventsPreview(){


return(

<section className="events-preview">


<div className="events-container">


<div className="section-heading">

<p>
What's Happening
</p>

<h2>
Upcoming Events
</h2>

</div>



<div className="events-card">


{
events.map((event)=>(

<div 
className="event-item"
key={event.title}
>


<div className="event-content">


<h3>
{event.title}
</h3>


<p>
📅 {event.date}
</p>


<p>
⏰ {event.time}
</p>


{
event.location && 
<p>
📍 {event.location}
</p>
}


</div>


</div>

))
}


</div>



<div className="events-button">

<Button
to="/events"
variant="primary"
>

View All Events

</Button>

</div>


</div>


</section>

);

}


export default EventsPreview;