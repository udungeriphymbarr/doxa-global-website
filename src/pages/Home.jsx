import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome/Welcome";
import ServiceTimes from "../components/home/ServiceTimes/ServiceTimes";
import MinistriesPreview 
from "../components/home/MinistriesPreview/MinistriesPreview";
import SermonsPreview 
from "../components/home/SermonsPreview/SermonsPreview";
import EventsPreview 
from "../components/home/EventsPreview/EventsPreview";


function Home(){

return(

<>

<Hero />

<Welcome />

<ServiceTimes />

<MinistriesPreview />

<SermonsPreview />

<EventsPreview />

</>

);

}


export default Home;