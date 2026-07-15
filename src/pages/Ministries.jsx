import MinistriesHero 
from "../components/ministries/MinistriesHero/MinistriesHero";
import MinistryIntro 
from "../components/ministries/MinistryIntro/MinistryIntro";
import MinistryGrid
from "../components/ministries/MinistryGrid/MinistryGrid";
import MinistryCTA
from "../components/ministries/MinistryCTA/MinistryCTA";


function Ministries(){

return(

<main>

<MinistriesHero />
<MinistryIntro />
<MinistryGrid />
<MinistryCTA />

</main>

);

}


export default Ministries;