import c from "./Content.module.css";
import "antd/dist/antd.css";
import { useState } from "react";
import { Button } from "antd";
import Drinks from "./Drinks/Drinks";
import Ingridients from "./Ingridients/Ingridients";
import Alcoholic from "./Alcoholic/Alcoholic";
import NonAlc from "./NonAlcoholic/NonAlcoholic";
import Random from "./Random/Random";

function Content() {
  const [change, setChange] = useState(null);

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
          <Button type="text" onClick={() => setChange("Alc")}>
            Total alcoholic coctails:
          </Button>
          <Button type="text" onClick={() => setChange("NonAlc")}>
            Total non alcoholic coctails:
          </Button>
        </div>
      </div>

      {change === "All" && <Drinks />}
      {change === "Ingridients" && <Ingridients />}
      {change === "Alc" && <Alcoholic />}
      {change === "NonAlc" && <NonAlc />}
      {change === null && (
        <div className={c.random}>
          <p className={c.random_title}>Random drinks</p>
          <div className={c.random_container}>
            <Random />
          </div>
        </div>
      )}
    </div>
  );
}

export default Content;
