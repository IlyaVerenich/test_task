import i from "./Info.module.css";

function Info({info}) {

  let arr=[];
  if (info != undefined){
    let a = Object.entries(info)
    a.map(el => {
      if (el[0].includes(`strIngredient`) && el[1]!=null) {
        arr.push(el[1])
      }
    })
  }

  return(
    <div>
      {info &&
      <div className={i.container}>
        <div className={i.title_container}>
          <img className={i.img} src={info.strDrinkThumb} alt="drink_img" />
          <p className={i.title}>{info.strDrink}</p>
        </div>
        <div className={i.about_container}>
          <div className={i.about_title}>About drink</div>
          <div className={i.info}>
            <div className={i.ingridients}>
              <p>Ingridients</p>
              <ul className={i.ingridients_list}>
                {arr.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <div className={i.create}>
              <p>How create this drink</p>
              <div className={i.create_list}>{info.strInstructions}</div>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Info;