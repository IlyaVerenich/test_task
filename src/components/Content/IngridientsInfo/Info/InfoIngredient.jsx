import i from "./InfoIngredient.module.css";

function InfoIngredient({info}) {
  return(
    <div>
      {info &&
      <div className={i.container}>
        <div className={i.name_container}>
          <div className={i.name}>Name</div>
          <div className={i.title}>{info[0].strIngredient}</div>
        </div>
        <div className={i.about_container}>
          <div className={i.about}>About this ingredient</div>
          <div className={i.about_info}>{info[0].strDescription}</div>
        </div>
        <div className={i.type_container}>
            <div className={i.type}>Type of this ingredient</div>
            <div className={i.type_info}>{info[0].strType}</div>
        </div>
      </div>
      }
    </div>
  )
}

export default InfoIngredient;