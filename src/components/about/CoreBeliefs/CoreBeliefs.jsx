import "./CoreBeliefs.css";


const beliefs = [

{
title:"The Word of God",

description:
"We believe the Bible is the foundation for faith, truth, and daily living."
},


{
title:"Faith In God",

description:
"We believe in trusting God and walking according to His purpose."
},


{
title:"The Power of Prayer",

description:
"We believe prayer connects believers with God's presence and power."
},


{
title:"Kingdom Impact",

description:
"We believe believers are called to impact lives and communities for God's glory."
}

];



function CoreBeliefs(){


return(

<section className="core-beliefs">


<div className="belief-container">


<div className="belief-heading">


<p>
Our Foundation
</p>


<h2>
Our Beliefs
</h2>


</div>




<div className="belief-grid">


{beliefs.map((belief)=>(


<div 
className="belief-card"
key={belief.title}
>


<h3>
{belief.title}
</h3>


<p>
{belief.description}
</p>


</div>


))}


</div>



</div>


</section>

);

}


export default CoreBeliefs;