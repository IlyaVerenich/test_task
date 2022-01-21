import c from "./Content.module.css";
import "antd/dist/antd.css";
import Drinks from "./Drinks/Drinks";
import Ingridients from "./Ingridients/Ingridients";
import Alcoholic from "./Alcoholic/Alcoholic";
import NonAlc from "./NonAlcoholic/NonAlcoholic";
import Random from "./Random/Random";
import { useState, useEffect } from "react";
import { Button } from "antd";
import DrinkInfo from "./DrinkInfo/DrinksInfo";
import SearchDrink from "./Search/SearchDrink";
import IngridientInfo from "./IngridientsInfo/IngridientsInfo";
// import IngridientInfo from "./IngridientsInfo/IngridientsInfo";

function Content(props) {
  const [change, setChange] = useState(null);
  const [id, setId] = useState (null);
  const [name, setName] = useState (null)

  useEffect (() => {
    if (props.letter) {
      setChange('Search')
    }
  },[props.letter])

  let getId = (id) => {
    setChange("DrinkInfo")
    setId(id)
  }

  let getName = (name) => {
    setChange('IngridientInfo')
    setName(name)
  }
  return (
    <div className={c.container}>
      <div className={c.title}>
        <div className={c.info}>
          <Button type="text" onClick={() => setChange("All")}>
            Total drinks:
          </Button>
          <Button type="text" onClick={() => setChange("Ingridients")}>
            Total ingridients:
          </Button>
          <Button type="text" onClick={() => setChange("Alcoholic")}>
            Total alcoholic coctails:
          </Button>
          <Button type="text" onClick={() => setChange("NonAlc")}>
            Total non alcoholic coctails:
          </Button>
        </div>
      </div>

      {change === "All" && <Drinks getId={(value)=>getId(value)}/>}
      {change === "Ingridients" && <Ingridients setName={(value)=>getName(value)}/>}
      {change === "Alcoholic" && <Alcoholic getId={(value)=>getId(value)}/>}
      {change === "NonAlc" && <NonAlc getId={(value)=>getId(value)}/>}
      {change === 'DrinkInfo' && <DrinkInfo id={id}/>}
      {change === 'IngridientInfo' && <IngridientInfo name={name}/>}
      {change === 'Search' && <SearchDrink getId={(value)=>getId(value)} letter={props.letter}/>}
      {change === null && <Random getId={(value)=>getId(value)}/>}
    </div>
  );
}

export default Content;
