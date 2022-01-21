import { useEffect, useState } from "react";
import { getNonAlcDrinks } from "../../../api";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import Error from "../../Error/Error";
import Loader from "../../Loader/Loader";
import n from "./NonAlcoholic.module.css";

function NonAlc() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [nonAlc, setNonAlc] = useState([]);

  useEffect(() => {
    setLoaded(true);
    getNonAlcDrinks()
      .then(
        (result) => {
          setNonAlc(result.drinks);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      )
      .then(() => setLoaded(false));
  }, []);

  return (
    <div className={n.container}>
      <div className={n.card}>
        {nonAlc.map((item) => (
          <Card
            style={{ width: 200, margin: 50 }}
            cover={<img alt="example" src={item.strDrinkThumb} />}
          >
            <Meta title={item.strDrink} />
          </Card>
        ))}
      </div>
      {error && <Error message={error.message} />}
      {loaded && <Loader />}
    </div>
  );
}

export default NonAlc;
