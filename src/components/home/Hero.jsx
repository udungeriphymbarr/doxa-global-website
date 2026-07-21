import church from "../../data/church";
import heroImage from "../../assets/images/hero/church-hero.webp";
import logo from "../../assets/images/logo/kingdom-logo.png";
import Button from "../common/Button";
import "./Hero.css";

function Hero(){

return (

<section
className="hero"
style={{
backgroundImage: `
linear-gradient(
rgba(4,25,60,0.75),
rgba(4,25,60,0.75)
),
url(${heroImage})
`
}}
>


<div className="hero-content">

<img
  src={logo}
  alt={`${church.name} official logo`}
  className="hero-logo"
/>

<p className="hero-subtitle">
Welcome To {church.name}
</p>


<h1>

{church.motto}

</h1>


<p className="hero-description">

A Christ-centered community committed
to transforming lives and revealing
God's glory to the nations.

</p>


<div className="hero-buttons">

<Button
to="/contact"
variant="primary"
>
Join Us This Sunday
</Button>


<Button
to="/sermons"
variant="outline"
>
Watch Sermons
</Button>

</div>

<div className="scroll-indicator">

<span>
↓
</span>

<p>
Explore
</p>

</div>

</div>


</section>


);

}


export default Hero;