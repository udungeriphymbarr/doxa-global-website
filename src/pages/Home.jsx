import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome/Welcome";
import ServiceTimes from "../components/home/ServiceTimes/ServiceTimes";
import MinistriesPreview 
from "../components/home/MinistriesPreview/MinistriesPreview";
import SermonsPreview 
from "../components/home/SermonsPreview/SermonsPreview";
import EventsPreview 
from "../components/home/EventsPreview/EventsPreview";
import GalleryPreview 
from "../components/home/GalleryPreview/GalleryPreview";
import PrayerCTA 
from "../components/home/PrayerCTA/PrayerCTA";
import GiveCTA from "../components/home/GiveCTA/GiveCTA";



function Home(){

return(

<>

<Hero />

<Welcome />

<ServiceTimes />

<MinistriesPreview />

<SermonsPreview />

<EventsPreview />

<GalleryPreview />

<PrayerCTA />

<GiveCTA />

</>

);

}


export default Home;