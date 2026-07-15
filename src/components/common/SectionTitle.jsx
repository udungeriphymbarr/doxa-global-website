function SectionTitle({
  subtitle,
  title,
  description
}) {

return (

<div className="section-title">

  <p>
    {subtitle}
  </p>


  <h2>
    {title}
  </h2>


  <span>
    {description}
  </span>

</div>

);

}


export default SectionTitle;