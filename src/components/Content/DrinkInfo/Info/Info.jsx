import i from "./Info.module.css";

function Info({info}) {
  return(
    <div>
      {info &&
      <div className={i.container}>
        <div className={i.title_container}>
          <img className={i.img} src={info.strDrinkThumb} alt="drink_img" />
          <p className={i.title}>{info.strDrink}</p>
        </div>
        <div className={i.about_container}>
          <div className={i.about_title}>About</div>
          <div className={i.info}>
            <div className={i.ingridients}>Ing</div>
            <div className={i.how_create}>how create</div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Info;