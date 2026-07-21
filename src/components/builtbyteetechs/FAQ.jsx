import { useState } from "react";
import "./FAQ.css";


const questions = [
{
question:
"How long does it take to build a church website?",

answer:
"Most church websites can be completed within 1 to 3 weeks depending on the number of pages, content availability, and required features."
},


{
question:
"Can you redesign our existing church website?",

answer:
"Yes. We can redesign outdated websites into modern, mobile-friendly platforms while preserving your church identity."
},


{
question:
"Do you help with domain and hosting?",

answer:
"Yes. TeeTechs provides guidance with domain registration, hosting setup, and website deployment."
},


{
question:
"Can our church update sermons and events later?",

answer:
"Yes. Websites can be structured to allow future updates and expansions as your ministry grows."
}

];


function FAQ(){

const [open,setOpen] = useState(null);


return(

<section className="faq">


<h2>
Frequently Asked Questions
</h2>


<div className="faq-container">


{questions.map((item,index)=>(


<div 
className="faq-item"
key={index}
>


<button
onClick={()=>setOpen(open === index ? null : index)}
>


{item.question}


<span>
{open === index ? "-" : "+"}
</span>


</button>



{open === index && (

<p>
{item.answer}
</p>

)}


</div>


))}


</div>


</section>

)

}


export default FAQ;