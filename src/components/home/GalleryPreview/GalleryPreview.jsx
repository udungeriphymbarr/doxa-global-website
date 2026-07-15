import gallery from "../../../data/gallery";
import Button from "../../common/Button";
import "./GalleryPreview.css";


function GalleryPreview(){


return(

<section className="gallery-preview">


<div className="gallery-container">


<div className="section-heading">


<p>
Experience DOXA GLOBAL
</p>


<h2>
Our Gallery
</h2>


</div>



<div className="gallery-grid">


{
gallery.map((item)=>(
<div
className="gallery-item"
key={item.title}
>


<img
src={item.image}
alt={item.title}
/>


</div>
))
}


</div>



<div className="gallery-button">

<Button
to="/gallery"
variant="primary"
>

View Full Gallery

</Button>

</div>



</div>


</section>

);

}


export default GalleryPreview;