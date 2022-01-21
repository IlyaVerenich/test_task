import c from "./Content.module.css";
import "antd/dist/antd.css";
import Drinks from "./Drinks/Drinks";
import Ingridients from "./Ingridients/Ingridients";
import Alcoholic from "./Alcoholic/Alcoholic";
import NonAlc from "./NonAlcoholic/NonAlcoholic";
import Random from "./Random/Random";
import { useState } from "react";
import { Button } from "antd";
import DrinkInfo from "./DrinkInfo/DrinksInfo";

function Content() {
  const [change, setChange] = useState(null);
  const [id, setId] = useState (null);

  let getId = (id) => {
    setChange("Info")
    setId(id)
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
      {change === "Ingridients" && <Ingridients getId={(value)=>getId(value)}/>}
      {change === "Alcoholic" && <Alcoholic getId={(value)=>getId(value)}/>}
      {change === "NonAlc" && <NonAlc getId={(value)=>getId(value)}/>}
      {change === 'Info' && <DrinkInfo id={id}/>}
      {change === null && <Random getId={(value)=>getId(value)}/>}
    </div>
  );
}

export default Content;
